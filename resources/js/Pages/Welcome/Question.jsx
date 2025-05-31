import React, { useState } from 'react'
import { Plus } from 'lucide-react'

const Question = () => {
    const [openItems, setOpenItems] = useState(new Set([0]))

    const faqData = [
        {
            question: "Siapa saja yang bisa menggunakan Tutormy.id?",
            answer: "Tutormy.id terbuka untuk pelajar SD, SMP, SMA, mahasiswa, bahkan umum yang ingin meningkatkan pengetahuan di bidang tertentu."
        },
        {
            question: "Siapa saja yang bisa menggunakan Tutormy.id?",
            answer: "GATAU"
        },
        {
            question: "Siapa saja yang bisa menggunakan Tutormy.id?",
            answer: "GATAU"
        },
        {
            question: "Siapa saja yang bisa menggunakan Tutormy.id?",
            answer: "GATAU."
        }
    ]

    const toggleItem = (index) => {
        const newOpenItems = new Set(openItems)
        if (newOpenItems.has(index)) {
            newOpenItems.delete(index)
        } else {
            newOpenItems.add(index)
        }
        setOpenItems(newOpenItems)
    }

    return (
        <section className='overflow-hidden '>
            <div className='relative container mx-auto text-white py-16 lg:py-20 space-y-8'>
                <div className="absolute w-60 h-60 lg:w-80 lg:h-96 bg-purple-700 opacity-40 blur-3xl rounded-full right-[-190px] top-16 z-0" />
                <div className='space-y-2 lg:space-y-4 w-full lg:w-1/2'>
                    <p className="text-primary-2 text-sm font-semibold">Frequently Ask Question</p>
                    <h2 className="text-2xl lg:text-4xl font-bold">Pertanyaan yang Sering Diajukan</h2>
                    <p className="lg:text-xl text-gray-300">Lorem ipsum dolor sit amet consectetur. Odio dolor arcu ullamcorper dictum nulla ph</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5 xl:gap-0'>
                    <div>
                        {faqData.map((item, index) => (
                            <div key={index} className="mb-4">
                                <div className="rounded-lg transition-all duration-300 bg-neutral-4 px-6 py-5 relative overflow-hidden">
                                    <div className="absolute left-3 top-5 bottom-5 w-[2px] bg-primary-2 rounded-full" />

                                    <button
                                        onClick={() => toggleItem(index)}
                                        className="w-full flex items-center justify-between text-left focus:outline-none"
                                    >
                                        <span className="lg:text-xl font-medium text-primary-2 pr-4">
                                            {item.question}
                                        </span>
                                        <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 ${openItems.has(index)
                                            ? 'bg-primary-4'
                                            : 'bg-neutral-6'
                                            }`}>
                                            <Plus className={`w-6 h-6 transition-colors duration-200 ${openItems.has(index)
                                                ? 'text-white'
                                                : 'text-neutral-1'
                                                }`} />
                                        </div>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-300 ${openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                        <div className="pt-4">
                                            <p className="leading-relaxed text-sm lg:text-base">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='md:flex justify-center hidden'>
                        <img src="/assets/question-component.webp" alt="image" className='w-[494px] lg:h-96' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Question