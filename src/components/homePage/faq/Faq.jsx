// FAQAccordion.jsx
import React, { useState } from "react";
import cls from "./faq.module.scss";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "Можно ли заказать дом по индивидуальному проекту?",
      answer:
        "Можно и нужно. Наши архитекторы разработают проект с учетом всех Ваших пожеланий. Есть возможность доработки уже существующего проекта. Для этого оставьте заявку на сайте или позвоните по указанным на сайте номерам.",
      checked: true
    },
    {
      question: "Что значит строительство «под ключ»?",
      answer:
        "Строительство домов под ключ включает в себя разработку полного проекта дома согласно требованиям клиента, закладку фундамента, цокольного этажа, если требуется, гидроизоляцию фундамента, возведение стен, перегородок, крыши, полное утепление дома, проводку коммуникационных систем, таких, как канализация, водопровод, отопление, электропроводка, все типы отделочных работ, установку сантехники, освещения и даже мебели",
      checked: true
    },
    {
      question: "Сколько по времени занимает строительство дома?",
      answer:
        "Срок строительства зависит от сезона, в который проводится работа, а также от самого проекта и метража дома.",
      checked: true
    },
    {
      question: "Где и как заказать строительство дома под ключ?",
      answer:
        "К вопросу выбора строительной компании нужно подходить очень ответственно. Нужно проверить фирмы сертификаты и лицензии, ознакомиться с отзывами на компанию в Яндекс и Google картах, посмотреть примеры выполненных работ, изучить условия и договор. Также немаловажный фактор - это вовлеченность руководителя в процесс строительства. Изучив все эти моменты, можно выбрать лучшую и надежную компанию по строительству домов и коттеджей в Уфе.",
      checked: true
    },
    {
      question: "Можно ли у Вас купить готовые дома или коттеджи в Уфе?",
      answer:
        "Компания СтройДомПроект предлагает возведение обычных и комбинированных домов под ключ. Готовых домов для продажи у нас нет.",
      checked: true
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={cls.faqSection}>
      <h1 className={cls.title}>Вопросы и ответы</h1>

      <div className={cls.accordion}>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`${cls.accordionItem} ${
              activeIndex === index ? cls.active : ""
            }`}
          >
            <button
              className={cls.accordionButton}
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
            >
              <span className={cls.checkbox}>
                {item.checked ? (
                  <span className={cls.checkedIcon}>✓</span>
                ) : (
                  <span className={cls.uncheckedIcon}></span>
                )}
              </span>
              <span className={cls.questionText}>{item.question}</span>
              <span className={cls.arrowIcon}>
                {activeIndex === index ? "▼" : "▶"}
              </span>
            </button>

            {activeIndex === index && (
              <div className={cls.accordionContent}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
