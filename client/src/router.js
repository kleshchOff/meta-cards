import { createRouter, createWebHistory } from 'vue-router';
import CardDisplay from './components/CardDisplay.vue';
import DeckView from './components/DeckView.vue';
import Registration from './components/Registration.vue';
import Login from './components/Login.vue';
import Profile from './components/Profile.vue';

const routes = [
    { path: '/', component: CardDisplay },
    { path: '/deck-view', component: DeckView },
    { path: '/register', component: Registration },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Глобальный guard на неавторизованные страницы
router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const user = window.localStorage.getItem('user');

    if (authRequired && !user) {
        return next('/login');
    }
    next();
});

export default router;
