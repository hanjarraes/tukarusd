import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Stepper = ({ steps }: { steps: { title: string; icon: string; description: string }[] }) => {
    const [activeStep, setActiveStep] = useState(0);

    const nextStep = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
        }
    };

    const prevStep = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };

    return (
        <div className="flex sm:hidden flex-col items-center w-full">
            {/* Judul Step */}
            <h2 className="text-[22px] font-semibold text-[--primary-v6] mb-4">
                {`${activeStep + 1}. ${steps[activeStep].title}`}
            </h2>

            {/* Ikon & Navigasi */}
            <div className="flex items-center gap-6">
                {/* Tombol Kiri */}
                <button
                    className={`p-3 rounded-full border border-[--primary-v3] ${activeStep === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[--primary-v2] hover:text-[--primary-v6]"}`}
                    onClick={prevStep}
                    disabled={activeStep === 0}
                >
                    <FaArrowLeft className="text-[20px]" />
                </button>

                {/* Ikon Step */}
                <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full border-2 bg-[--primary-v2] text-[--primary-v6]">
                    <i className={`${steps[activeStep].icon} text-[32px]`} />
                </div>

                {/* Tombol Kanan */}
                <button
                    className={`p-3 rounded-full border border-[--primary-v3] ${activeStep === steps.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[--primary-v2] hover:text-[--primary-v6]"}`}
                    onClick={nextStep}
                    disabled={activeStep === steps.length - 1}
                >
                    <FaArrowRight className="text-[20px]" />
                </button>
            </div>

            {/* Indikator Progress */}
            <div className="flex gap-2 mt-6">
                {steps.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${index === activeStep ? "bg-[--primary-v6] w-6" : "bg-[--primary-v3] w-3"}`}
                    />
                ))}
            </div>

            {/* Deskripsi */}
            <p className="text-[16px] text-center text-[--primary-v6] mt-4">{steps[activeStep].description}</p>
        </div>
    );
};

export default Stepper;
