export function MaintenancePage() {
  return (
    <main className="maintenance">
      <div className="maintenance-content">
        <a className="wordmark" href="/" aria-label="GNOQ — início">
          GNOQ<span aria-hidden="true">.</span>
        </a>
        <p className="eyebrow">ESTAMOS ATUALIZANDO NOSSO SITE</p>
        <h1>
          Uma nova experiência
          <br />
          está a caminho.
        </h1>
        <p className="description">
          Nosso site está em manutenção. Enquanto preparamos as novidades,
          seguimos disponíveis para conversar sobre o seu projeto.
        </p>
        <a className="contact" href="mailto:gabriel.neves@gnoq.com.br">
          Entre em contato <span aria-hidden="true">↗</span>
        </a>
        <p className="email">gabriel.neves@gnoq.com.br</p>
      </div>
      <footer>
        © {new Date().getFullYear()} GNOQ. Todos os direitos reservados.
      </footer>
    </main>
  );
}
