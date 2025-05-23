import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                inter: ['"Inter"', "sans-serif"],
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
                },
                secondary: {
                    1: "#FDF2F0",
                    2: "#F8D5CF",
                    3: "#FFDB5E",
                    4: "#FFCB13",
                    5: "#F4810C",
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
                },
            },
            backgroundImage: (theme) => ({
                "gradient-light": "linear-gradient(to left, #590994, #C985FC)",
                "gradient-dark": "linear-gradient(to left, #24063A, #6311A0)",
                "gradient-dark-down": "linear-gradient(to top, #24063A, #6311A0)",
            }),
        },
    },

    plugins: [forms],
};
