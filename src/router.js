import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("./views/Home.vue")
    },
    {
        path: '/sub/:token',
        name: 'Sub',
        component: () => import("./views/Sub.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: to => {
            return { path: '/' };
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;