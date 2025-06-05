import React, { useState, useRef, useCallback } from 'react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Icon } from '@iconify/react';

const STATUS_OPTIONS = [
  { value: '', label: 'Pilih Statusmu', disabled: true },
  { value: 'pelajar', label: 'Pelajar' },
  { value: 'mahasiswa', label: 'Mahasiswa' },
  { value: 'umum', label: 'Umum' },
];

const GENDER_OPTIONS = [
  { value: 'laki-laki', label: 'Laki-laki' },
  { value: 'perempuan', label: 'Perempuan' },
];

const Step1 = ({ nextStep }) => {
  const [formData, setFormData] = useState({
    status: '',
    gender: '',
    birthdate: '',
  });

  const [errors, setErrors] = useState({});
  const dateInputRef = useRef(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.status) newErrors.status = 'Status wajib diisi';
    if (!formData.gender) newErrors.gender = 'Jenis kelamin wajib diisi';
    if (!formData.birthdate) newErrors.birthdate = 'Tanggal lahir wajib diisi';

    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      nextStep(formData);
    }
  };

  const openDatePicker = () => {
    dateInputRef.current?.showPicker?.() || dateInputRef.current?.click?.();
  };

  return (
    <section>
      <div className="text-white max-w-md mx-auto space-y-8">
        <header className="space-y-3 text-center">
          <h2 className="text-3xl font-bold">Konfirmasi Akun</h2>
          <p className="text-xl font-semibold">Satu langkah lagi menuju semua mimpimu!</p>
        </header>

        <form className="space-y-5 h-80" onSubmit={(e) => e.preventDefault()}>
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
                {STATUS_OPTIONS.map(({ value, label, disabled }) => (
                  <option key={value} value={value} disabled={disabled}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            {errors.status && <p className="text-sm text-red-400 mt-1">{errors.status}</p>}
          </div>

          <div>
            <InputLabel value="Jenis Kelamin" className="mb-2" />
            <div className="flex space-x-4 mt-2">
              {GENDER_OPTIONS.map(({ value, label }) => (
                <label
                  key={value}
                  className="flex-1 flex items-center space-x-2 cursor-pointer py-3 bg-neutral-3 rounded-full px-7"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={value}
                    checked={formData.gender === value}
                    onChange={handleChange}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
            {errors.gender && <p className="text-sm text-red-400 mt-1">{errors.gender}</p>}
          </div>

          <div>
            <InputLabel htmlFor="birthdate" value="Tanggal Lahir" className="mb-2" />
            <div className="relative">
              <button
                type="button"
                onClick={openDatePicker}
                className="absolute inset-y-0 left-0 pl-4 flex items-center z-10"
              >
                <Icon icon="mdi:calendar" className="w-5 h-5 text-white" />
              </button>
              <input
                ref={dateInputRef}
                id="birthdate"
                name="birthdate"
                type="date"
                value={formData.birthdate}
                onChange={handleChange}
                className="w-full pl-12 bg-neutral-3 border-none rounded-full py-3 text-sm appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0"
              />
            </div>
            {errors.birthdate && <p className="text-sm text-red-400 mt-1">{errors.birthdate}</p>}
          </div>
        </form>

        <div className="flex justify-center">
          <PrimaryButton
            type="button"
            variant="secondary"
            onClick={handleSubmit}
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