import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0024B3",
        secondary: "#000F49",
        stratos: {
          accent: '#0032ff',   // Color de boton azul
          orange: '#ff6e00', // naranja
          text: '#000096',     // azulo oscurito
          muted: '#eff2ff',    // Gris suave
          success: '#10b981',  // Verde
          error: '#ef4444',    // Rojo para errores
          info: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
