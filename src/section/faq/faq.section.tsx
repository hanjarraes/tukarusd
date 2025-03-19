import { useState } from "react";

const faqs = [
    {
        question: "What is BiteCoin and how does it work?",
        answer:
            "BiteCoin is a secure and user-friendly crypto platform that allows you to buy, sell, and trade digital assets. With advanced blockchain technology, we ensure seamless transactions and top-tier security.",
    },
    {
        question: "Is BiteCoin safe to use?",
        answer:
            "Yes! BiteCoin employs enterprise-grade encryption, multi-layer authentication, and AI-powered fraud detection to keep your assets secure at all times.",
    },
    {
        question: "How do I buy cryptocurrency on BiteCoin?",
        answer:
            "Simply create an account, verify your identity, deposit funds, and start buying or trading cryptocurrencies through our easy-to-use dashboard.",
    },
    {
        question: "What fees does BiteCoin charge?",
        answer:
            "BiteCoin offers competitive fees for trading, withdrawals, and deposits. You can check the full fee structure in the 'Fees & Pricing' section on our website.",
    },
    {
        question: "Can I stake my crypto on BiteCoin?",
        answer:
            "Yes! BiteCoin offers staking options for various cryptocurrencies, allowing you to earn passive income by holding and staking your assets.",
    },
    {
        question: "How do I withdraw funds from my BiteCoin wallet?",
        answer:
            "To withdraw funds, navigate to your wallet, select the withdrawal option, enter the recipient address, and confirm the transaction. Withdrawals are processed securely and efficiently.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-[--primary-v5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-4xl font-bold text-center text-[--primary-v1] mb-10">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-[--primary-v1] rounded-xl p-4 transition-all duration-300 shadow-2xl"
                        >
                            <button
                                className="flex justify-between items-center w-full text-lg font-medium text-left"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-[--primary-v1]">{faq.question}</span>
                                <i
                                    className={`ri-${activeIndex === index ? "subtract" : "add"}-line text-2xl transition-transform text-[--primary-v1] duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="mt-2 text-[--primary-v4] dark:text-[--primary-v1]">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
