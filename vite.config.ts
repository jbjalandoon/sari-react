import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5137,
  },
  preview: {
    host: true,
    port: 5137,
  },
  plugins: [react(), TanStackRouterVite()],
});
