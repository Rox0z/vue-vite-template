import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages"
import VueI18n from "@intlify/vite-plugin-vue-i18n"
import ViteCompression from "vite-plugin-compression"

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    ViteCompression(),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve(__dirname, "src/i18n/**")]
    })]
})
