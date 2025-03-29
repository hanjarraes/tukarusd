import Payment from "../../assets/payment.png";
import Unlimited from "../../assets/unlimited-websites.png";
import Bitcoint from "../../assets/bitcoin.png";
import MoneyBag from "../../assets/money-bag.png";
import People from "../../assets/people.png";
import Hours from "../../assets/24-hours-service.png";
import { useTranslation } from "react-i18next";

const FeaturesSection = () => {
    const { t } = useTranslation()


    const features = [
        {
            icon: Payment,
            title: t("fastTransaction"),
            description: t("fastTransactionDesc"),
        },
        {
            icon: Unlimited,
            title: t("multipleBank"),
            description: t("multipleBankDesc"),
        },
        {
            icon: Bitcoint,
            title: t("bestLiquidity"),
            description: t("bestLiquidityDesc"),
        },
        {
            icon: MoneyBag,
            title: t("competitiveRate"),
            description: t("competitiveRateDesc"),
        },
        {
            icon: People,
            title: t("exclusiveServices"),
            description: t("exclusiveServicesDesc"),
        },
        {
            icon: Hours,
            title: t("support24"),
            description: t("support24Desc"),
        },
    ];
    return (
        <section className="bg-[--primary-v1]" id="features">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16" data-aos="fade-up" data-aos-duration={`1000`}>
                    <div className="mb-4 text-4xl tracking-tight font-extrabold text-[--primary-v6]">
                    {t("discoverFeatures")}<br /> {t("secureTrading")}
                    </div>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1" >
                    {features.map((feature, index) => (
                        <div key={`item-feature-${index}`} data-aos="fade-up" data-aos-duration={`1000`} className="flex flex-col items-start bg-[--primary-v2] rounded-lg p-5 border-[--primary-v2] shadow-xl">
                            <div className="flex justify-center items-center bg-[--primary-v1] rounded-md p-2 mb-3">
                                <img className="w-[50px]" src={feature.icon} alt="image" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-[--primary-v6]">{feature.title}</h3>
                            <p className="text-[--primary-v5]">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
