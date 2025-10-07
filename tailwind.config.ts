module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    safelist: [
        // ✅ Prevent Tailwind from purging custom classes used in your arrows, gradients, etc.
        {
            pattern: /border-(l|r|t|b)-\[\d+px\]/, // keeps things like border-l-[5px]
        },
        {
            pattern: /bg-\[#.*\]/, // keeps arbitrary hex background colors like bg-[#293464]
        },
    ],
    plugins: [],
};
