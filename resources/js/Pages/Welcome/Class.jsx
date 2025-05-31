import React from 'react'

const Class = () => {
    const courses = [
        {
            id: 1,
            title: "Product Development Series",
            lessons: "180 Pelajaran",
            image: "/assets/hero.png"
        },
        {
            id: 2,
            title: "Product Development Series",
            lessons: "180 Pelajaran",
            image: "/assets/hero.png"
        },
        {
            id: 3,
            title: "Product Development Series",
            lessons: "180 Pelajaran",
            image: "/assets/hero.png"
        },
        {
            id: 4,
            title: "Product Development Series",
            lessons: "180 Pelajaran",
            image: "/assets/hero.png"
        },
        {
            id: 5,
            title: "Product Development Series",
            lessons: "180 Pelajaran",
            image: "/assets/hero.png"
        },
        {
            id: 6,
            title: "Product Development Series",
            lessons: "180 Pelajaran",
            image: "/assets/hero.png"
        },
        {
            id: 7,
            title: "Product Development Series",
            lessons: "180 Pelajaran",
            image: "/assets/hero.png"
        },
        {
            id: 8,
            title: "Product Development Series",
            lessons: "180 Pelajaran",
            image: "/assets/hero.png"
        }
    ]

    return (
        <section>
            <div className='container mx-auto text-white py-16 lg:py-20'>
                <div>
                    <div className='space-y-5 flex flex-col items-center mb-12'>
                        <h2 className="text-center text-2xl lg:text-4xl font-bold lg:w-2/3">
                            Belajar Nggak Pernah Semudah Ini!
                            Yuk Jelajahi Ratusan Video di TutorMy.id!
                        </h2>
                        <p className="text-center lg:text-xl text-gray-300">
                            Ribuan pelajar sudah membuktikan, sekarang giliran kamu belajar bareng TutorMy.id!
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {courses.map((course) => (
                            <div key={course.id} className="bg-neutral-5 border-b-2 border-b-primary-2 rounded-b-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="aspect-video">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-full object-cover">
                                    </img>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-xs lg:text-lg mb-2">{course.title}</h3>
                                    <p className="bg-neutral-700 px-2 py-1 font-bold rounded-full text-xs lg:text-sm inline-block max-w-max">
                                        {course.lessons}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <button className="bg-primary-3 hover:bg-primary-4 font-semibold py-3 px-5 lg:px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                            Lihat Kelas Lainnya
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Class