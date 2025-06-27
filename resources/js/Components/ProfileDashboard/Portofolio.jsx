import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import PrimaryButton from '../PrimaryButton'

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center space-y-2">
        <div className="w-16 h-16 bg-neutral-3 rounded-full flex items-center justify-center">
            <Icon icon="material-symbols:folder-outline" className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-neutral-1 text-lg">Belum ada portofolio</p>
        <p className="text-neutral-2 text-sm">Gunakan button "Tambah" di atas untuk menambahkan portofolio</p>
    </div>
)

const PortfolioCard = ({ portfolio }) => (
    <div className="bg-neutral-3 rounded-xl overflow-hidden">
        <img src="/assets/hero.png" alt="portfolio" className='rounded-xl w-full h-72 object-cover' />
        <div className="flex items-center justify-between p-4">
            <div>
                <h3 className="font-semibold ">{portfolio.name}</h3>
            </div>
            <a href={portfolio.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-primary-3 hover:bg-primary-4 p-2 rounded-full transition-colors">
                    <Icon icon="material-symbols:arrow-outward" className="w-4 h-4" />
                </button>
            </a>
        </div>
    </div>
)

const PortfolioGrid = ({ portfolios }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
        ))}
    </div>
)

const PortfolioPopup = ({ formData, setFormData, onClose, onSave, onChange }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div className="bg-neutral-3 rounded-2xl p-6 w-full max-w-2xl mx-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Tambahkan Portofolio</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                    <Icon icon="material-symbols:close" className="w-6 h-6" />
                </button>
            </div>

            <div className="space-y-4">
                {['name', 'link'].map((field, idx) => (
                    <div key={idx}>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            {field === 'name' ? 'Masukkan Nama' : 'Salin atau ketikan link'}
                        </label>
                        <input
                            type={field === 'name' ? 'text' : 'url'}
                            value={formData[field]}
                            onChange={(e) => onChange(field, e.target.value)}
                            className="w-full bg-neutral-5 border border-primary-3 rounded-full px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                            placeholder={field === 'name' ? 'ex: Project UI Landing Page' : 'https://github.com/username/project'}
                        />
                    </div>
                ))}

                <div className='flex justify-end'>
                    <PrimaryButton className='rounded-full' onClick={onSave}>Simpan</PrimaryButton>
                </div>
            </div>
        </div>
    </div>
)

const Portofolio = () => {
    const [portfolios, setPortfolios] = useState([])
    const [showPopup, setShowPopup] = useState(false)
    const [formData, setFormData] = useState({ name: '', link: '' })

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleAddPortfolio = () => {
        if (formData.name.trim() && formData.link.trim()) {
            const newPortfolio = {
                id: Date.now(),
                name: formData.name,
                link: formData.link
            }
            setPortfolios([...portfolios, newPortfolio])
            setFormData({ name: '', link: '' })
            setShowPopup(false)
        }
    }

    return (
        <section className='text-white min-h-screen'>
            <div className='container mx-auto space-y-6'>
                <div className='flex justify-between items-center'>
                    <h1 className="text-xl font-semibold">Portofolio Saya</h1>
                    <button
                        onClick={() => setShowPopup(true)}
                        disabled={portfolios.length > 0}
                        className={`text-lg font-semibold flex items-center gap-2 transition-colors ${portfolios.length > 0
                            ? 'text-gray-500 cursor-not-allowed'
                            : 'hover:text-purple-400'
                            }`}
                    >
                        Tambah <Icon icon="ic:round-plus" className='w-6 h-6' />
                    </button>
                </div>

                {portfolios.length === 0 ? <EmptyState /> : <PortfolioGrid portfolios={portfolios} />}

                {showPopup && (
                    <PortfolioPopup
                        formData={formData}
                        setFormData={setFormData}
                        onClose={() => setShowPopup(false)}
                        onSave={handleAddPortfolio}
                        onChange={handleInputChange}
                    />
                )}
            </div>
        </section>
    )
}

export default Portofolio