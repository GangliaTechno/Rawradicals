module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                // now you get a `font-montserrat` utility
                montserrat: ['Montserrat', 'sans-serif'],
            }
        }
    },
    plugins: [],
}