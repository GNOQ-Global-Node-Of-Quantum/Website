import { NextResponse, type NextRequest } from "next/server";

// Keep every old URL behind maintenance until the new website is ready.
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.json(
      { error: "Site em manutenção. Entre em contato por e-mail." },
      { status: 503, headers: { "Retry-After": "3600", "Cache-Control": "no-store" } },
    );
  }
  if (request.nextUrl.pathname === "/") return NextResponse.next();
  const destination = request.nextUrl.clone();
  destination.pathname = "/";
  destination.search = "";
  return NextResponse.redirect(destination, 307);
}

export const config = {
  matcher: ["/((?!_next/).*)"],
};
