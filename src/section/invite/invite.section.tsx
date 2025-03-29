import { useState } from "react";
import { useTranslation } from "react-i18next";



export default function InviteSection() {
    const [activeStep, setActiveStep] = useState(0);
    const { t } = useTranslation()
    const steps = [
        {
            title: t("stepClickStartOTC"),
            description: t("stepClickStartOTCDesc"),
            icon: "ri-user-follow-line",
        },
        {
            title: t("stepConsultTeam"),
            description: t("stepConsultTeamDesc"),
            icon: "ri-customer-service-2-line",
        },
        {
            title: t("stepJoinVIP"),
            description: t("stepJoinVIPDesc"),
            icon: "ri-group-line",
        },
        {
            title: t("stepStartTrading"),
            description: t("stepStartTradingDesc"),
            icon: "ri-money-dollar-circle-line",
        },
    ];
    return (
        <div className="flex flex-col items-center py-10 bg-[--primary-v1]" id="howToJoin">
            <h2 className=" px-[2rem] sm:px-[5rem] text-4xl  font-semibold mb-6 text-[--primary-v6]" data-aos="fade-up" data-aos-duration={`1000`}>{t("experienceBest")}</h2>
            <div className="flex flex-col items-center justify-center gap-3 w-full">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center w-[350px] sm:w-[600px]" data-aos="fade-up" data-aos-duration={`1000`}>
                        <div className="grid grid-cols-3 gap-1 sm:gap-3 w-full items-center">
                            <div className={`text-[22px] text-right w-full font-semibold ${index === activeStep ? "text-[--primary-v6]" : "text-[--primary-v4]"}`}>
                                {`${index + 1}. ${step.title}`}
                            </div>
                            <div className="flex justify-center">
                                <div
                                    className={`flex items-center justify-center w-[80px] py-4 rounded-full border-2 transition-all cursor-pointer hover:bg-[--primary-v2] hover:text-[--primary-v6]
                                    ${index === activeStep ? "bg-[--primary-v2] text-[--primary-v6]" : "border-[--primary-v3] bg-[--primary-v6] text-[--primary-v2]"}`}
                                    onClick={() => setActiveStep(index)}
                                >
                                    <i className={`${step.icon} text-[28px]`} />
                                </div>
                            </div>


                            {index === activeStep && (
                                <div className="text-left text-[18px] w-[100px] sm:w-[200px]">
                                    <p className="text-[--primary-v6]">{step.description}</p>
                                </div>
                            )}
                        </div>
                        {index < steps.length - 1 && (
                            <div
                                className={`border-l-2 border-[--primary-v3] transition-all duration-300 ${index === activeStep ? "h-[50px]" : "h-[30px]"
                                    } mt-2`}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}