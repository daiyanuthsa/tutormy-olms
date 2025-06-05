import React, { useState } from 'react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Icon } from '@iconify/react'; 

const Step1 = ({ nextStep }) => {
  const [formData, setFormData] = useState({
    status: '',
    gender: '',
    birthdate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section>
      <div className="text-white max-w-md mx-auto space-y-8">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold">Konfirmasi Akun</h2>
          <p className="text-xl font-semibold">Satu langkah lagi menuju semua mimpimu !</p>
        </div>

        <div className="space-y-6 h-80">
          <div>
            <InputLabel htmlFor="status" value="Status" className="mb-2" />
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Icon icon="mdi:account" className="w-5 h-5" />
              </div>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="appearance-none w-full pl-12 pr-10 py-3 text-sm bg-neutral-3 rounded-full border-none shadow-sm focus:ring-primary-2"
              >
                <option value="" disabled>Pilih Statusmu</option>
                <option value="pelajar">Pelajar</option>
                <option value="mahasiswa">Mahasiswa</option>
                <option value="umum">Umum</option>
              </select>
            </div>
          </div>

          <div>
            <InputLabel value="Jenis Kelamin" className="mb-2" />
            <div className="flex space-x-4 mt-2">
              <label className="flex-1 flex items-center justify-start space-x-2 cursor-pointer py-3 bg-neutral-3 rounded-full px-7">
                <input
                  type="radio"
                  name="gender"
                  value="laki-laki"
                  checked={formData.gender === 'laki-laki'}
                  onChange={handleChange}
                />
                <span>Laki-laki</span>
              </label>
              <label className="flex-1 flex items-center justify-start space-x-2 cursor-pointer py-3 bg-neutral-3 rounded-full px-7">
                <input
                  type="radio"
                  name="gender"
                  value="perempuan"
                  checked={formData.gender === 'perempuan'}
                  onChange={handleChange}
                />
                <span>Perempuan</span>
              </label>
            </div>
          </div>

          <div>
            <InputLabel htmlFor="birthdate" value="Tanggal Lahir" className="mb-2" />
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Icon icon="mdi:calendar" className="w-5 h-5" />
              </div>
              <TextInput
                id="birthdate"
                name="birthdate"
                type="date"
                value={formData.birthdate}
                onChange={handleChange}
                className="w-full pl-12 bg-neutral-3 border-none appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <PrimaryButton
            variant="secondary"
            onClick={() => nextStep(formData)}
            className="rounded-2xl bg-primary-4 px-6"
          >
            Lanjutkan →
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Step1;