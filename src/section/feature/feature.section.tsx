import Payment from "../../assets/payment.png";
import Unlimited from "../../assets/unlimited-websites.png";
import Bitcoint from "../../assets/bitcoin.png";
import MoneyBag from "../../assets/money-bag.png";
import People from "../../assets/people.png";
import Hours from "../../assets/24-hours-service.png";

const features = [
    {
        icon: Payment,
        title: "Fast Transaction",
        description:
            "Enjoy 15 minutes Fast Transaction Experience process from confirmation to completion.",
    },
    {
        icon: Unlimited,
        title: "Multiple Bank & Blockchain",
        description:
            "Seamless payments with multiple banking and blockchain network choices.",
    },
    {
        icon: Bitcoint,
        title: "Best Liquidity & Zero Fees",
        description:
            "We provide deep liquidity for a better trading experience and zero fees on crypto trades starting from $5,000.",
    },
    {
        icon: MoneyBag,
        title: "Competitive Rate",
        description:
            "We offer the most competitive rates in the market.",
    },
    {
        icon: People,
        title: "Exclusive Services",
        description:
            "Dedicated professionals focused on delivering exceptional service and long-term trust.",
    },
    {
        icon: Hours,
        title: "Competitive Rate",
        description:
            "Offering exclusive 24/7 dedicated services just for you.",
    },
];

const FeaturesSection = () => {
    return (
        <section className="bg-[--primary-v1]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16" data-aos="fade-up" data-aos-duration={`1000`}>
                    <div className="mb-4 text-4xl tracking-tight font-extrabold text-[--primary-v4]">
                        Discover TukarUSDT Features:<br /> Secure & Seamless USDT Trading
                    </div>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" >
                    {features.map((feature, index) => (
                        <div key={`item-feature-${index}`} data-aos="fade-up" data-aos-duration={`1000`}  className="flex flex-col items-start bg-[--primary-v2] rounded-lg p-5 border-[--primary-v2] shadow-xl">
                            <div className="flex justify-center items-center bg-[--primary-v4] rounded-md p-2 mb-3">
                                <img className="w-[50px]" src={feature.icon} alt="image" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-[--primary-v1]">{feature.title}</h3>
                            <p className="text-[--primary-v5]">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
