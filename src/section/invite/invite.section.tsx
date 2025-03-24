import { useState } from "react";

const steps = [
    {
        title: "Buat Akun",
        description: "Daftar dan verifikasi akunmu di TukarUSDT dengan mudah.",
        icon: "ri-user-follow-line",
    },
    {
        title: "Konsultasi Gratis",
        description: "Diskusikan strategi dan kebutuhan tradingmu dengan tim ahli kami.",
        icon: "ri-customer-service-2-line",
    },
    {
        title: "Gabung ke Komunitas",
        description: "Terhubung dengan para trader di grup eksklusif kami.",
        icon: "ri-group-line",
    },
    {
        title: "Mulai Trading",
        description: "Tim kami siap membantumu trading kapan pun, di mana pun.",
        icon: "ri-money-dollar-circle-line",
    },
];

export default function InviteSection() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="flex flex-col items-center py-10 bg-[--primary-v5]">
            <h2 className="text-[32px] font-semibold mb-6 text-[--primary-v1]">Yuk gabung TukarUSDT</h2>
            <div className="flex flex-col items-center justify-center gap-3">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center w-[600px]">
                        <div className="grid grid-cols-3 gap-3 w-full items-center">
                            <div className={`text-[22px] text-right w-full font-semibold ${index === activeStep ? "text-[--primary-v1]" : "text-[--primary-v2]"}`}>
                                {`${index + 1}. ${step.title}`}
                            </div>
                            <div className="flex justify-center">
                                <div
                                    className={`flex items-center justify-center w-[80px] py-4 rounded-full border-2 transition-all cursor-pointer hover:bg-[--primary-v2] hover:text-[--primary-v1]
                                    ${index === activeStep ? "bg-[--primary-v2] text-[--primary-v1]" : "border-[--primary-v3] bg-[--primary-v1] text-[--primary-v2]"}`}
                                    onClick={() => setActiveStep(index)}
                                >
                                    <i className={`${step.icon} text-[28px]`} />
                                </div>
                            </div>


                            {index === activeStep && (
                                <div className="text-left text-[18px] w-[200px]">
                                    <p className="text-[--primary-v1]">{step.description}</p>
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