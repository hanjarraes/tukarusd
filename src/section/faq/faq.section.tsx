import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const { t } = useTranslation();

    const faqs = [
        { question: t("faqWhatIsOTC"), answer: t("faqWhatIsOTCAnswer") },
        { question: t("faqHowToBeginOTC"), answer: t("faqHowToBeginOTCAnswer") },
        { question: t("faqHowLongOTC"), answer: t("faqHowLongOTCAnswer") },
        { question: t("faqOTCSecurity"), answer: t("faqOTCSecurityAnswer") },
        { question: t("faqOTCLimits"), answer: t("faqOTCLimitsAnswer") },
        { question: t("faqAvailableCrypto"), answer: t("faqAvailableCryptoAnswer") },
    ];


    return (
        <section className="bg-gradient-to-r from-[--primary-v2] to-[--primary-v3]" id='faq'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="#faq">
                <h2 className="text-4xl font-bold text-center text-[--primary-v6] mb-10" data-aos="fade-up" data-aos-duration={`1000`}>
                  { t("faqTitle")}
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            data-aos="fade-up" data-aos-duration={`1000`}
                            className="border  bg-[--primary-v1] rounded-xl p-4 transition-all duration-300 shadow-2xl"
                        >
                            <button
                                className="flex justify-between items-center w-full text-lg font-medium text-left"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-[--primary-v6]">{faq.question}</span>
                                <i
                                    className={`ri-${activeIndex === index ? "subtract" : "add"}-line text-2xl transition-transform text-[--primary-v6] duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="mt-2 text-[--primary-v4] dark:text-[--primary-v6]">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
