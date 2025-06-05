import React, { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';

const Step2 = ({ nextStep }) => {
  const [reason, setReason] = useState('');

  const handleNext = () => {
    nextStep({ reason });
  };

  return (
    <section>
      <div className="max-w-xl mx-auto text-white space-y-8">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold">Mari cari tahu tentang Tutormy</h2>
          <p className="text-xl font-semibold">Apa ekspetasi kamu bergabung bersama Tutormy?</p>
        </div>

        <div className='h-80'>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Berikan alasanmu bergabung di sini"
            className="w-full h-40 px-4 py-3 bg-neutral-5 rounded-2xl resize-none"
          />
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
