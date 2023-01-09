require('./bootstrap');

import { createApp } from 'vue';
import { createRouter, createWebHistory} from "vue-router";

import VehiclesIndex from './components/Vehicles/Index.vue';
import VehiclesCreate from './components/Vehicles/Create.vue';
import App from './layouts/App';
import { TailwindPagination } from 'laravel-vue-pagination';

const routes = [
    { path: '/', component: VehiclesIndex },
    { path: '/cars/create', component: VehiclesCreate }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


const app = createApp(App)
app.use(router)
app.component('TailwindPagination', TailwindPagination);
app.mount('#app')
