/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#8892B0',
                secondary: '#CCD6F6',
                callToAction: '#59E3C5',
                background: '#0A192F',
            },
            fontFamily: {
                Assistant: ['Assistant', 'sans-serif'],
            },
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [],
}
