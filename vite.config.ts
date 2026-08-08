import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [checker({ typescript: true })],
  worker: {},
  build: {
    sourcemap: false,
  },
  server: {
    open: false,
    port: 1234,
    host: "localhost",
  },
});
