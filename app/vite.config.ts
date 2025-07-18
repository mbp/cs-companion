import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VUE_OPTIONS_API__: false,
  },
  plugins: [
    vue(),
    Icons({
      /* options */
    }),
  ],
});
