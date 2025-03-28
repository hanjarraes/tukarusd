import { useState } from "react";

const steps = [
    {
        title: "Click Start OTC",
        description: "Join TukarUSDT now—Click Start OTC",
        icon: "ri-user-follow-line",
    },
    {
        title: "Consult with Our Team",
        description: "Let’s talk! Contact our team and set up a discussion.",
        icon: "ri-customer-service-2-line",
    },
    {
        title: "Join Our VIP Group",
        description: "Consult with us and enhance your trading journey.",
        icon: "ri-group-line",
    },
    {
        title: "Start Trading ",
        description: "We’re here to assist you 24/7, wherever you are.",
        icon: "ri-money-dollar-circle-line",
    },
];

export default function InviteSection() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="flex flex-col items-center py-10 bg-[--primary-v1]">
            <h2 className=" px-[2rem] sm:px-[5rem] text-4xl  font-semibold mb-6 text-[--primary-v6]" data-aos="fade-up" data-aos-duration={`1000`}>Experience the best with TukarUSDT OTC—join us now! </h2>
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