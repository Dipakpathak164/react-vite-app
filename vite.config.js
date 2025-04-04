import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/react-vite-app/", // Change this to your GitHub repo name
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true, // Allows deep linking in dev mode
  },
});
