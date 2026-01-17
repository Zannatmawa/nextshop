/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#c7522a",   // main brand color
                secondary: "#e5c185", // soft gold accent
                light: "#fbf2c4",     // soft background
                dark: "#0B1120",      // dark sections / footer
                card: "#111827",      // cards on dark
                muted: "#9CA3AF",     // text gray
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark"],
    },
};
