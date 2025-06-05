import React, { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';

const SourceOption = ({ item, selected, onSelect }) => (
    <button
        type="button"
        onClick={() => onSelect(item)}
        className={`flex items-center gap-2 px-6 py-2 rounded-full border-2 transition-all duration-200 ${selected === item
                ? 'bg-purple-600 border-purple-400 text-white'
                : 'bg-transparent border-gray-400 text-gray-300 hover:border-purple-400'
            }`}
    >
        <input
            type="radio"
            name="source"
            value={item}
            checked={selected === item}
            onChange={() => onSelect(item)}
            className="accent-primary-2 bg-transparent border-2"
            required
        />
        <span>{item}</span>
    </button>
);

const Step3 = ({ nextStep }) => {
    const [source, setSource] = useState('');
    const [error, setError] = useState('');

    const handleNext = () => {
        if (!source) {
            setError('Silakan pilih salah satu sumber.');
            return;
        }

        setError('');
        nextStep({ source });
    };

    const options = {
        SosialMedia: ['Youtube', 'Instagram', 'Twitter'],
        Lainnya: ['Teman', 'Lainnya'],
    };

    return (
        <section>
            <div className="max-w-md mx-auto text-white space-y-8">
                <div className="space-y-3 text-center">
                    <h2 className="text-3xl font-bold">Mari cari tahu tentang Tutormy</h2>
                    <p className="text-xl font-semibold">
                        Dari mana kamu mengetahui Tutormy? Pilih opsi di bawah ini ya!
                    </p>
                </div>

                <div className="space-y-10 h-72">
                    {Object.entries(options).map(([group, values]) => (
                        <div key={group} className="flex justify-center gap-6">
                            {values.map((item) => (
                                <SourceOption
                                    key={item}
                                    item={item}
                                    selected={source}
                                    onSelect={setSource}
                                />
                            ))}
                        </div>
                    ))}
                    {error && <p className="text-sm text-red-400 text-center">{error}</p>}
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