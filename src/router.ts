import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            component: () => import('./pages/Dashboard.vue'),
            name: 'dashboard',
            path: '',
        },
    ],
});

export default router;
