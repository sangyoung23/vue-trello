import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue'
import SearchListView from '../views/SearchListView.vue'
import DetailView from '../components/DetailView.vue'

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/detail/:id/:todo',
        name: 'DetailView',
        component: DetailView,
        props: true
    },
    {
        path: '/search',
        name: 'SearchView',
        component: SearchListView
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router