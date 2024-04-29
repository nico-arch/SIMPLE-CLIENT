import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
  define: {
    API_URL_V1: `"${process.env["API_URL_V1"]}"`,
  },
});
