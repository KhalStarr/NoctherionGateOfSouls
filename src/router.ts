import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            component: () => import("@/pages/Root.vue"),
            path: "",
            children: [
                {
                    component: () => import("@/pages/Dashboard.vue"),
                    name: "threshold-gate",
                    path: "",
                },
                {
                    component: () => import("@/pages/Ascension.vue"),
                    name: "ascension",
                    path: "ascension",
                },
                {
                    component: () => import("@/pages/BlackMarket.vue"),
                    name: "black-market",
                    path: "black-market",
                },
                {
                    component: () => import("@/pages/Forge.vue"),
                    name: "forge",
                    path: "forge",
                },
                {
                    component: () => import("@/pages/Rituals.vue"),
                    name: "rituals",
                    path: "rituals",
                },
            ],
        },
    ],
});

export default router;
