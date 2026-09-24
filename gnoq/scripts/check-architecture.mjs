import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = path.resolve("src");
function sourceFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory()
      ? sourceFiles(file)
      : /\.tsx?$/.test(file)
        ? [file]
        : [];
  });
}
const failures = [];
const files = sourceFiles(root);
for (const file of files) {
  const relative = path.relative(root, file);
  const source = ts.createSourceFile(
    file,
    fs.readFileSync(file, "utf8"),
    ts.ScriptTarget.Latest,
    true,
  );
  function visit(node) {
    if (
      node.kind === ts.SyntaxKind.AnyKeyword ||
      node.kind === ts.SyntaxKind.UnknownKeyword
    ) {
      const { line } = source.getLineAndCharacterOfPosition(
        node.getStart(source),
      );
      failures.push(
        `${relative}:${line + 1}: use a domain type or validate external data.`,
      );
    }
    if (
      (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) &&
      node.moduleSpecifier &&
      ts.isStringLiteral(node.moduleSpecifier)
    ) {
      const specifier = node.moduleSpecifier.text;
      const target = specifier.startsWith("@/")
        ? specifier.slice(2)
        : specifier.startsWith(".")
          ? path.relative(root, path.resolve(path.dirname(file), specifier))
          : "";
      if (
        (relative.startsWith("shared/") && /^(features|app)\//.test(target)) ||
        (relative.startsWith("features/") && target.startsWith("app/"))
      ) {
        failures.push(`${relative}: invalid layer dependency ${specifier}`);
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `Architecture and explicit type checks passed (${files.length} source files).`,
  );
}
