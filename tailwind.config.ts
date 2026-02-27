import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2e4437",
                secondary: "#d8cdbf",
            },
            fontFamily: {
                sans: ["var(--font-outfit)", "sans-serif"],
            },
            maxWidth: {
                container: "1280px",
            },
            aspectRatio: {
                "16/11": "16 / 11",
            },
            transitionDuration: {
                "300": "300ms",
            },
        },
    },
    plugins: [],
};

export default config;
