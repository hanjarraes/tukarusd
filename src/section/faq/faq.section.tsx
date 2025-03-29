import { useState } from "react";

const faqs = [
    {
        question: "What is OTC?",
        answer:
            "Over-the-Counter (OTC) trading refers to the direct exchange of crypto assets between two parties without relying on a traditional exchange, allowing for greater flexibility and accommodating larger transaction volumes.",
    },
    {
        question: "How to Begin OTC Trading with TukarUSDT?",
        answer:
            "Connect with the OTC Team: Engage with our expert OTC team to customize your trading experience.Begin Trading: Our dedicated team offers personalized solutions for your OTC transactions.",
    },
    {
        question: "How Long Does It Take to Process an OTC Transaction with TukarUSDT?",
        answer:
            "TukarUSDT OTC transactions are generally processed within 1×24 hours, depending on the availability of our OTC trading team and market conditions.",
    },
    {
        question: "What Security System is Applied to OTC Trading?",
        answer:
            "TukarUSDT will contact you through a private group with our specialized team to ensure a faster and more secure OTC transaction process.",
    },
    {
        question: "What Are the Minimum and Maximum Transaction Limits for OTC at TukarUSDT?",
        answer:
            "TukarUSDT OTC has a minimum transaction limit of 5 million IDR, with the maximum value adjustable to your needs. Please contact our OTC team for further details and personalized offers.",
    },
    {
        question: "Which Cryptocurrencies Are Available for Trading with TukarUSDT OTC?",
        answer:
            "You can trade a variety of crypto assets through OTC, with a primary focus on the stablecoin USDT.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-gradient-to-r from-[--primary-v2] to-[--primary-v3]" id='faq'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="#faq">
                <h2 className="text-4xl font-bold text-center text-[--primary-v6] mb-10" data-aos="fade-up" data-aos-duration={`1000`}>
                    TukarUSDT FAQ: Everything You Need to Know
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
