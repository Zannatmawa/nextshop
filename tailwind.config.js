/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // enable class-based dark mode
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#800022",  // Maroon
                light: "#FBF2C4",    // Light background
                dark: "#0B1120",     // Dark background
                card: "#111827",     // Dark card
                muted: "#9CA3AF",    // Gray text
            },
        },
    },
}
