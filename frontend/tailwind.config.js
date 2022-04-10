module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                logoBlue: '#4fb8b0',
                logoDark: '#328a82',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
