import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";
import ProgressBar from "../../Components/CompleteProfile/ProgressBar";
import Step1 from "../../Components/CompleteProfile/Step1";
import Step2 from "../../Components/CompleteProfile/Step2";
import Step3 from "../../Components/CompleteProfile/Step3";
import ApplicationLogo from "@/Components/ApplicationLogo";
import PrimaryButton from "@/Components/PrimaryButton";
import { Icon } from "@iconify/react";

const CompleteProfile = () => {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        status: "",
        gender: "",
        birthdate: "",
        expectation: "",
        discovery_source: "",
    });

    const nextStep = (data) => {
        if (step === 1) {
            setForm((prev) => ({
                ...prev,
                status: data.status,
                gender: data.gender === "laki-laki" ? "M" : "F", // mapping ke F/M
                birthdate: data.birthdate,
            }));
            setStep(2);
        } else if (step === 2) {
            setForm((prev) => ({
                ...prev,
                expectation: data.reason,
            }));
            setStep(3);
        }
    };
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    // Handler untuk Step3
    const handleSubmit = ({ source }) => {
        setForm((prev) => ({
            ...prev,
            discovery_source: source,
        }));

        // POST ke endpoint
        router.post(route("profile.complete.post"), {
            status: form.status,
            gender: form.gender,
            date_birth: form.birthdate,
            expectation: form.expectation,
            discovery_source: source,
        });
    };

    return (
        <section>
            <Head title="Complete Profile" />

            <div className="absolute bottom-0 w-80 h-80 bg-purple-700 opacity-30 blur-3xl rounded-full left-[-100px] top-1/4 z-0" />

            <div className="min-h-screen text-white px-4 sm:px-6 md:px-12 lg:px-20 py-6 md:py-8 relative">
                <div className="flex items-center justify-between mb-7">
                    <PrimaryButton
                        variant="outline"
                        onClick={prevStep}
                        className={`rounded-xl md:rounded-2xl text-white px-3 py-2 md:px-4 md:py-2.5 lg:px-6 lg:py-3 text-sm md:text-base ${
                            step === 1 ? "invisible" : ""
                        }`}
                    >
                        <Icon
                            icon="basil:arrow-left-outline"
                            width="16"
                            height="16"
                            className="mr-1.5 md:mr-2 md:w-5 md:h-5"
                        />
                        <span className="hidden sm:inline">Kembali</span>
                    </PrimaryButton>

                    <div className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0">
                        <div className="scale-75 sm:scale-90 md:scale-100 lg:scale-110">
                            <ApplicationLogo />
                        </div>
                    </div>

                    <div className="w-[60px] sm:w-[100px] md:w-[120px] lg:w-[140px] flex-shrink-0"></div>
                </div>

                <div className="flex flex-1 justify-center items-center">
                    <div id="form" className="w-full max-w-xl">
                        <ProgressBar currentStep={step} />
                        {step === 1 && <Step1 nextStep={nextStep} />}
                        {step === 2 && (
                            <Step2 nextStep={nextStep} prevStep={prevStep} />
                        )}
                        {step === 3 && (
                            <Step3
                                prevStep={prevStep}
                                nextStep={handleSubmit}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompleteProfile;
