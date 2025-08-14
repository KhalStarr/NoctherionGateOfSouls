import { createApp } from "vue";
import "@/styles.css";
import App from "@/App.vue";
import router from "@/router.ts";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(router).mount("#app");
