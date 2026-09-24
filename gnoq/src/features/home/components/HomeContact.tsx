import { LEAD_EMAIL, whatsappLink } from "@/shared/constants/contact.constants";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
export function HomeContact() {
  return (
    <section
      className="contact-section"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="container contact-inner" data-reveal>
        <div>
          <p className="eyebrow">VAMOS CONSTRUIR O PRÓXIMO PASSO</p>
          <h2 id="contact-title">
            O começo pode ser
            <br />
            uma boa conversa.
          </h2>
          <p>
            Conte o desafio e o momento da sua empresa.
            <br />
            Vamos entender a necessidade e avaliar o próximo passo.
          </p>
        </div>
        <div className="contact-actions">
          <div className="contact-expectations">
            <p>COMO A CONVERSA COMEÇA</p>
            <span>
              <Check size={15} /> Entendemos o seu desafio
            </span>
            <span>
              <Check size={15} /> Conversamos sobre caminhos possíveis
            </span>
            <span>
              <Check size={15} /> Alinhamos o próximo passo
            </span>
          </div>
          <a
            className="button button-white"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> Conversar com a GNOQ{" "}
            <ArrowUpRight size={19} />
          </a>
          <a className="email-link" href={`mailto:${LEAD_EMAIL}`}>
            {LEAD_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
