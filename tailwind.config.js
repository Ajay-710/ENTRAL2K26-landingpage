/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050510", // Very dark navy/black
                surface: "#0f0f25",    // Slightly lighter for cards
                primary: "#00f3ff",    // Cyan / Electric Blue
                secondary: "#bc13fe",  // Neon Purple
                accent: "#ff00ff",     // Neon Pink
                "neon-green": "#0aff0a",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // I should probably import Inter in CSS or HTML
                orbitron: ['Orbitron', 'sans-serif'], // Good for futuristic headers
            },
            boxShadow: {
                'neon-blue': '0 0 10px #00f3ff, 0 0 20px rgba(0, 243, 255, 0.4)',
                'neon-purple': '0 0 10px #bc13fe, 0 0 20px rgba(188, 19, 254, 0.4)',
                'neon-pink': '0 0 10px #ff00ff, 0 0 20px rgba(255, 0, 255, 0.4)',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
