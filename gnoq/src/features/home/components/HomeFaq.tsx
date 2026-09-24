import { FaqItem } from "@/features/home/components/FaqItem";
import { faqs } from "@/features/home/data/home.data";
export function HomeFaq() {
  return (
    <section
      data-reveal
      className="faq-section container"
      aria-labelledby="faq-title"
    >
      <div>
        <p className="eyebrow">ANTES DE COMEÇAR</p>
        <h2 id="faq-title">
          Boas perguntas.
          <br />
          Respostas diretas.
        </h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <FaqItem key={faq.question} faq={faq} />
        ))}
      </div>
    </section>
  );
}
