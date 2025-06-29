export const DUMMY_COURSES = [
    {
        id: 1,
        title: "Product Development Series - Core Concepts",
        slug: "product-development-series---core-concepts",
        description:
            "Pelajari dasar-dasar pengembangan produk dari ide hingga peluncuran. Kelas ini mencakup strategi, alat, dan studi kasus nyata untuk mengubah ide menjadi produk yang sukses di pasar. Cocok untuk pemula hingga manajer produk yang ingin memperdalam pengetahuannya.",
        image_url: "/assets/hero.png",
        lessons_count: 180,
        category: { name: "Design", slug: "design" },
        mentor_name: "Ir. Bagus Prasetya, M.Kom.",
        mentor_title: "Product Manager Google Developer",
        total_videos: 28,
        students_joined: 100,
        price: 50000,
        package_name: "Premium",
        hasPaid: true,
        benefits: [
            "Front-End Developer",
            "Sertifikat Kelulusan",
            "Akses Penuh Pembelajaran",
            "Kemudahan Akses Laptop, tablet, mobile",
        ],
        what_you_will_learn: [
            "Memahami lifecycle pengembangan produk dari ideasi hingga peluncuran.",
            "Menganalisis kebutuhan pengguna dan pasar untuk mengidentifikasi peluang produk.",
            "Merancang user journey dan prototipe yang efektif dan user-friendly.",
            "Strategi peluncuran produk yang sukses dan teknik pemasaran awal.",
            "Mengukur keberhasilan produk menggunakan metrik kunci (KPI) dan analitik.",
            "Meningkatkan produk secara iteratif berdasarkan umpan balik pengguna dan data.",
            "Kolaborasi lintas fungsi dengan tim engineering, desain, dan marketing.",
            "Penggunaan alat-alat modern untuk manajemen backlog dan roadmap produk.",
        ],
        curriculum: [
            {
                id: "intro",
                title: "Pendahuluan",
                lessons: [
                    {
                        id: 1,
                        title: "Pengenalan Product Development",
                        duration: "15 Menit",
                        is_locked: false,
                        type: "video",
                        description:
                            "Gambaran umum tentang apa itu pengembangan produk dan mengapa penting dipelajari.",
                    },
                    {
                        id: 2,
                        title: "Mengapa Product Development Penting?",
                        duration: "10 Menit",
                        is_locked: false,
                        type: "video",
                        description:
                            "Membahas alasan mengapa pengembangan produk menjadi kunci dalam dunia bisnis digital.",
                    },
                ],
            },
            {
                id: "materi-1",
                title: "Materi 1 - Ideasi dan Validasi Produk",
                lessons: [
                    {
                        id: 3,
                        title: "Menemukan Ide Produk Unggul",
                        duration: "20 Menit",
                        is_locked: true,
                        type: "video",
                        description:
                            "Strategi dan teknik dalam menghasilkan ide produk yang relevan dan potensial.",
                    },
                    {
                        id: 4,
                        title: "Riset Pasar dan Analisis Kompetitor",
                        duration: "25 Menit",
                        is_locked: true,
                        type: "video",
                        description:
                            "Cara melakukan riset pasar dan menganalisis kompetitor secara efektif.",
                    },
                    {
                        id: 5,
                        title: "Membuat Value Proposition Canvas",
                        duration: "18 Menit",
                        is_locked: true,
                        type: "video",
                        description:
                            "Mempelajari tools untuk memetakan value produk dan kebutuhan pelanggan.",
                    },
                ],
            },
            {
                id: "materi-2",
                title: "Materi 2 - Desain dan Prototyping",
                lessons: [
                    {
                        id: 6,
                        title: "Dasar-Dasar UX Design",
                        duration: "30 Menit",
                        is_locked: true,
                        type: "video",
                        description:
                            "Pengenalan terhadap prinsip dan praktik UX dalam desain produk digital.",
                    },
                    {
                        id: 7,
                        title: "Membangun Wireframe dengan Figma",
                        duration: "35 Menit",
                        is_locked: true,
                        type: "video",
                        description:
                            "Panduan membuat wireframe awal menggunakan Figma sebagai tools desain.",
                    },
                    {
                        id: 8,
                        title: "Prototyping Interaktif",
                        duration: "22 Menit",
                        is_locked: true,
                        type: "video",
                        description:
                            "Membuat prototype interaktif untuk uji coba pengalaman pengguna.",
                    },
                ],
            },
            {
                id: "materi-3",
                title: "Materi 3 - Pengembangan dan Peluncuran",
                lessons: [
                    {
                        id: 9,
                        title: "Manajemen Agile dan Scrum",
                        duration: "40 Menit",
                        is_locked: true,
                        type: "video",
                        description:
                            "Pengenalan metode Agile dan kerangka kerja Scrum dalam pengembangan produk.",
                    },
                    {
                        id: 10,
                        title: "Strategi Go-to-Market",
                        duration: "28 Menit",
                        is_locked: true,
                        type: "video",
                        description:
                            "Strategi membawa produk ke pasar dan menjangkau pengguna pertama.",
                    },
                ],
            },
            {
                id: "materi-4",
                title: "Materi 4 - Metrik dan Peningkatan",
                lessons: [
                    {
                        id: 11,
                        title: "Memahami Metrik Produk",
                        duration: "20 Menit",
                        is_locked: true,
                        type: "video",
                        description:
                            "Menentukan dan menganalisis metrik penting dalam evaluasi produk.",
                    },
                    {
                        id: 12,
                        title: "Iterasi dan A/B Testing",
                        duration: "25 Menit",
                        is_locked: true,
                        type: "video",
                        description:
                            "Teknik iterasi produk dan penerapan A/B testing untuk validasi fitur.",
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        title: "Fundamental Web Design with Figma",
        slug: "fundamental-web-design-with-figma",
        description:
            "Buat desain website yang menarik dan fungsional dari nol menggunakan Figma. Pelajari prinsip-prinsip desain web modern, alat-alat Figma, dan praktik terbaik untuk menciptakan pengalaman pengguna yang memukau.",
        image_url: "/assets/hero.png",
        lessons_count: 120,
        category: { name: "Design", slug: "design" },
        mentor_name: "Dewi Lestari, S.Des.",
        mentor_title: "UI/UX Designer & Instructor",
        total_videos: 15,
        students_joined: 95,
        price: 45000,
        package_name: "Basic",
        hasPaid: false,
        benefits: [
            "Dasar Desain Web",
            "Penggunaan Figma Efektif",
            "Sertifikat Partisipasi",
            "Akses Materi Offline",
        ],
        what_you_will_learn: [
            "Dasar-dasar desain UI/UX untuk web.",
            "Penggunaan fitur-fitur dasar Figma.",
            "Membuat wireframe dan prototype sederhana.",
            "Memahami sistem grid dan responsivitas desain.",
        ],
        curriculum: [
            {
                id: "intro-figma",
                title: "Pengenalan Figma",
                lessons: [
                    {
                        id: 1,
                        title: "Apa itu Figma?",
                        duration: "10 Menit",
                        is_locked: false,
                        type: "video",
                        description:
                            "Mengenal Figma sebagai tools desain UI/UX berbasis cloud dan keunggulannya.",
                    },
                    {
                        id: 2,
                        title: "Tour Antarmuka Figma",
                        duration: "15 Menit",
                        is_locked: false,
                        type: "video",
                        description:
                            "Menjelajahi tampilan dan fungsi utama di dalam dashboard Figma.",
                    },
                ],
            },
            {
                id: "dasar-desain",
                title: "Materi 1 - Prinsip Dasar Desain Web",
                lessons: [
                    {
                        id: 3,
                        title: "Tipografi untuk Web",
                        duration: "20 Menit",
                        is_locked: true,
                        type: "video",
                        description:
                            "Panduan memilih dan menerapkan tipografi yang sesuai untuk website.",
                    },
                    {
                        id: 4,
                        title: "Teori Warna dan Aplikasi",
                        duration: "25 Menit",
                        is_locked: true,
                        type: "video",
                        description:
                            "Penerapan teori warna untuk menciptakan desain web yang harmonis dan menarik.",
                    },
                ],
            },
        ],
    },
];

export const DUMMY_CATEGORIES = [
    { name: "Discover", slug: "discover" },
    { name: "Design", slug: "design" },
    { name: "Code", slug: "code" },
    { name: "Soft Skills", slug: "soft-skills" },
    { name: "User-Interface", slug: "user-interface" },
    { name: "User-Experience", slug: "user-experience" },
    { name: "Front-End", slug: "front-end" },
    { name: "Back-End", slug: "back-end" },
    { name: "Software", slug: "software" },
];
