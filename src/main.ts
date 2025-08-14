import { createApp } from "vue";
import "@/styles.css";
import App from "@/App.vue";
import router from "@/router.ts";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

const pinia = createPinia().use(piniaPluginPersistedState);

createApp(App).use(pinia).use(router).mount("#app");
