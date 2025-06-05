import React, { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';

const MAX_CHARS = 1000;

const Step2 = ({ nextStep }) => {
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    const charCount = reason.trim().length;

    if (!charCount) {
      setError('Alasan wajib diisi.');
      return;
    }

    if (charCount > MAX_CHARS) {
      setError(`Maksimal ${MAX_CHARS} karakter. Saat ini: ${charCount} karakter.`);
      return;
    }

    setError('');
    nextStep({ reason });
  };

  const handleChange = (e) => {
    setReason(e.target.value);
    setError('');
  };

  return (
    <section>
      <div className="max-w-xl mx-auto text-white space-y-8">
        <header className="space-y-3 text-center">
          <h2 className="text-3xl font-bold">Mari cari tahu tentang Tutormy</h2>
          <p className="text-xl font-semibold">Apa ekspektasi kamu bergabung bersama Tutormy?</p>
        </header>

        <div className="h-80">
          <textarea
            value={reason}
            onChange={handleChange}
            placeholder="Berikan alasanmu bergabung di sini"
            className="w-full h-40 px-4 py-3 bg-neutral-5 rounded-2xl resize-none text-sm"
            maxLength={MAX_CHARS}
          />
          <div className="flex justify-between mt-1 text-xs text-neutral-300">
            <span>{reason.length}/{MAX_CHARS} karakter</span>
          </div>
          {error && <p className="text-sm text-red-400 mt-1">{error}</p>}
        </div>
    
        <div className="flex justify-center">
          <PrimaryButton
            variant="secondary"
            onClick={handleNext}
            className="rounded-2xl bg-primary-4 px-6"
          >
            Lanjutkan →
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Step2;