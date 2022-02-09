module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        backgroundColor: (theme) => ({
            ...theme("colors"),
            primary: "#0a0908",
            secondary: "#2A2A2A",
        }),
    },
    extend: {
        fontFamily: {
            sans: ["ui-sans-serif", "system-ui"],
            serif: ["ui-serif", "Georgia"],
            mono: ["ui-monospace", "SFMono-Regular"],
            LeckerliOne: ["Leckerli One", "cursive"],
            body: ['"Open Sans"'],
        },
        spacing: {
            100: "30rem",
        },
    },
    variants: {
        lineClamp: ["responsive", "hover"],
    },
    plugins: [require("@tailwindcss/line-clamp")],
};