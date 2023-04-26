import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
import DetailView from '../components/DetailView.vue';

const routes = [
    {
        path: '/',
        name: 'Homeview',
        component: HomeView
    },
    {
        path: '/detail/:id/:todo',
        name: 'DetailView',
        component: DetailView,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router