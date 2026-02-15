import { useState } from "react";

function Faq({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!data) return null;

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq" id="faq">
      <h2 className="section-heading">{data.title}</h2>
      <div className="faq-list">
        {(data.content.questions || []).map((item, i) => (
          <div key={i} className="faq-item">
            <div className="faq-question" onClick={() => toggle(i)}>
              <span>{item.question}</span>
              <span className="faq-toggle">{openIndex === i ? "−" : "+"}</span>
            </div>
            {openIndex === i && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
