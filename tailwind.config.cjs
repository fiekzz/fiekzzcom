/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        LPrimary: "#006590",
        LOnPrimary: "#ffffff",
        LPrimaryContainer: "#c8e6ff",
        LOnPrimaryContainer: "#001e2f",
        LOutline: "#71787e",
        LSurfaceVariant: "#dde3ea",
        LOnSurfaceVariant: "#41474d",
        DPrimary: "#89ceff",
        DOnPrimary: "#00344d",
        DPrimaryContainer: "#004c6e",
        DOnPrimaryContainer: "#c8e6ff",
        DOutline: "#8b9198",
        DSurfaceVariant: "#41474d",
        DOnSurfaceVariant: "#c1c7ce",
        Error: "#ffb4ab",
        OnError: "#690005",
        ErrorContainer: "#93000a",
        OnErrorContainer: "#ffdad6",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
