/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#8892B0',
                primaryLight: '#ccd6f6',
                secondary: '#CCD6F6',
                callToAction: '#59E3C5',
                background: '#0A192F',
            },
            fontFamily: {
                Assistant: ['Lato', 'sans-serif'],
            },
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [],
}
