import type { HomeFaqItem } from "../types/home.types";
interface FaqItemProps {
  faq: HomeFaqItem;
}
export function FaqItem({ faq }: FaqItemProps) {
  return (
    <details className="faq-item" key={faq.question}>
      <summary>
        {faq.question}
        <span aria-hidden="true">+</span>
      </summary>
      <p>{faq.answer}</p>
    </details>
  );
}
