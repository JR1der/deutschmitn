/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            },
            colors: {
                'dark-red': '#AE0101',
                'my-yellow': '#FFCC01',
                'yellow-2': '#FFD700',
                'yellow-3': '#e1b016',
                'bg-1': '#FFFCEE',
                'bg-2': '#f3e8c2',
                'my-black': '#1E1E1E'
            }
        },
    },
    plugins: [],
}

