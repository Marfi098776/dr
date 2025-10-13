import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTranslation } from '@/Hooks/useTranslation';
import React from 'react';

const FAQ = () => {
    const { t, isBangla } = useTranslation()
    const faqs = [
    {
      question: t("faq.1.question"),
      answer: t("faq.1.answer")
    },
    {
      question: t("faq.2.question"),
      answer: t("faq.2.answer")
    },
    {
      question: t("faq.3.question"),
      answer: t("faq.3.answer")
    },
    {
      question: t("faq.4.question"),
      answer: t("faq.4.answer")
    },
    {
      question: t("faq.5.question"),
      answer: t("faq.5.answer")
    },
    {
      question: t("faq.6.question"),
      answer: t("faq.6.answer")
    }
  ];

  return (
    <section id="faq" className="py-16 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl text-foreground mb-4 ${isBangla ? 'bangla' : ''}`}>{t("faq.title")}</h2>
          <p className={`text-lg text-muted-foreground ${isBangla ? 'bangla' : ''}`}>
            {t("faq.subtitle")}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg px-6 border-border"
            >
              <AccordionTrigger className={`text-left lg:text-xl hover:no-underline ${isBangla ? 'bangla' : ''}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className={`text-muted-foreground lg:text-lg ${isBangla ? 'bangla' : ''}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
    );
};

export default FAQ;