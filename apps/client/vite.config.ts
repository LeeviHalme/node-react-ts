import react from "@vitejs/plugin-react"; // eslint-disable-line import/no-extraneous-dependencies
import { defineConfig } from "vite"; // eslint-disable-line import/no-extraneous-dependencies

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
