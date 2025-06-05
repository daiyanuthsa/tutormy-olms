import React, { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';

const Step3 = ({ prevStep, nextStep }) => {
    const [source, setSource] = useState('');

    const handleNext = () => {
        if (!source) return;
        nextStep({ source });
    };

    const socialSources = ['Youtube', 'Instagram', 'Twitter'];
    const otherSources = ['Teman', 'Lainnya'];

    return (
        <section>
            <div className="max-w-md mx-auto text-white space-y-8">
                <div className="space-y-3 text-center">
                    <h2 className="text-3xl font-bold">Mari cari tahu tentang Tutormy</h2>
                    <p className="text-xl font-semibold">
                        Dari mana kamu mengetahui Tutormy? Pilih opsi di bawah ini ya!
                    </p>
                </div>

                <div className="space-y-11 h-72">
                    <div className="flex justify-center gap-14">
                        {socialSources.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSource(item)}
                                className={`flex items-center gap-2 px-6 py-2 rounded-full border-2 transition-all duration-200 ${source === item
                                    ? 'bg-purple-600 border-purple-400 text-white'
                                    : 'bg-transparent border-gray-400 text-gray-300 hover:border-purple-400'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="source"
                                    value={item}
                                    checked={source === item}
                                    onChange={() => setSource(item)}
                                    className="accent-primary-2 bg-transparent border-2"
                                />
                                <span>{item}</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex justify-center gap-14">
                        {otherSources.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSource(item)}
                                className={`flex items-center gap-2 px-6 py-2 rounded-full border-2 transition-all duration-200 ${source === item
                                    ? 'bg-purple-600 border-purple-400 text-white'
                                    : 'bg-transparent border-gray-400 text-gray-300 hover:border-purple-400'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="source"
                                    value={item}
                                    checked={source === item}
                                    onChange={() => setSource(item)}
                                    className="accent-primary-2 bg-transparent border-2"
                                />
                                <span>{item}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <PrimaryButton
                        variant="secondary"
                        onClick={handleNext}
                        className="rounded-2xl bg-primary-4 px-6"
                    >
                        Simpan
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Step3;