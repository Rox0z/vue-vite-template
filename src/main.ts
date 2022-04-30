import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import { createI18n } from "vue-i18n";
import routes from "~pages";
import "./assets/styles/index.css";

import messages from "@intlify/vite-plugin-vue-i18n/messages";

const router = createRouter({
    history: createWebHistory(),
    routes
});

const i18n = createI18n({
    legacy: false,
    locale: "en",
    globalInjection: true,
    messages
});

createApp(App).use(router).use(i18n).mount("#app");
