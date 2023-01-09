require('./bootstrap');

import { createApp } from 'vue';
import { createRouter, createWebHistory} from "vue-router";

import VehiclesIndex from './components/Vehicles/Index.vue';
import VehiclesCreate from './components/Vehicles/Create.vue';
import VehiclesEdit from './components/Vehicles/Edit.vue';
import App from './layouts/App';
import { TailwindPagination } from 'laravel-vue-pagination';
import VueSweetalert2 from "vue-sweetalert2";

const routes = [
    { path: '/', name: 'cars.index', component: VehiclesIndex, meta: { title: 'Electric Vehicles Dashboard'} },
    { path: '/cars/create', name: 'cars.create', component: VehiclesCreate, meta: { title: 'Add Electric Vehicle'} },
    { path: '/cars/edit/:id', name: 'cars.edit', component: VehiclesEdit, meta: { title: 'Edit Electric Vehicle'} }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


const app = createApp(App)
app.use(router)
app.use(VueSweetalert2)
app.component('TailwindPagination', TailwindPagination)
app.mount('#app')
