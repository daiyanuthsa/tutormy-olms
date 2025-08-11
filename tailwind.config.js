import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                paytone: ["Paytone One", "sans-serif"],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "3rem",
                    xl: "4rem",
                },
                screens: {
                    sm: "600px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1240px",
                    "2xl": "1440px",
                },
            },
            colors: {
                primary: {
                    1: "#EDD4FF",
                    2: "#C985FC",
                    3: "#A157E4",
                    4: "#590994",
                    5: "#24063A",
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    1: "#FDF2F0",
                    2: "#F8D5CF",
                    3: "#FFDB5E",
                    4: "#FFCB13",
                    5: "#F4810C",
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                success: {
                    1: "#DFFFE0",
                    2: "#67E06B",
                    3: "#1AAC20",
                },
                neutral: {
                    1: "#D7CDCD",
                    2: "#C2C2C2",
                    3: "#2C2C3C",
                    4: "#22222E",
                    5: "#191B27",
                    6: "#11141D",
                },
                warning: {
                    1: "#F5EEE4",
                    2: "#FCE9CF",
                    3: "#EBC351",
                    4: "#DCA55B",
                    5: "#C39251",
                    6: "#926E3D",
                },
                error: {
                    1: "#A41111",
                    2: "#7B0D0D",
                    3: "#510909",
                    4: "#A41111",
                },
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    1: "hsl(var(--chart-1))",
                    2: "hsl(var(--chart-2))",
                    3: "hsl(var(--chart-3))",
                    4: "hsl(var(--chart-4))",
                    5: "hsl(var(--chart-5))",
                },
            },
            backgroundImage: {
                "gradient-light": "linear-gradient(to right, #590994, #C985FC)",
                "gradient-light-left":
                    "linear-gradient(to right, #C392F0, #59307E)",
                "gradient-dark": "linear-gradient(to left, #24063A, #6311A0)",
                "gradient-dark-down":
                    "linear-gradient(to top, #24063A, #6311A0)",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },

    plugins: [
        require("tailwind-scrollbar-hide"),
        forms,
        function ({ addUtilities }) {
            addUtilities({
                ".no-scrollbar": {
                    "-ms-overflow-style": "none",
                    "scrollbar-width": "none",
                },
                ".no-scrollbar::-webkit-scrollbar": {
                    display: "none",
                },
            });
        },
        require("tailwindcss-animate"),
    ],
};
