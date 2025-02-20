/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Pretendard"],
            },
            colors: {
                "soft-black": "#1A1A1A",
            },
        },
    },
    plugins: [],
}
