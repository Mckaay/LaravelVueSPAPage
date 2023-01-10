require('./bootstrap');

import { createApp } from 'vue';
import { createRouter, createWebHistory} from "vue-router";

import VehiclesIndex from './components/Vehicles/Index.vue';
import VehiclesCreate from './components/Vehicles/Create.vue';
import VehiclesEdit from './components/Vehicles/Edit.vue';
import Login from './components/Authentication/Login.vue';
import Register from './components/Authentication/Register.vue';

import Authenticated from "./layouts/Authenticated.vue";
import Guest from "./layouts/Guest.vue";

import { TailwindPagination } from 'laravel-vue-pagination';
import VueSweetalert2 from "vue-sweetalert2";

function auth(to, from, next) {
    axios.get('/api/authenticated')
        .then(() => {
            next();
        })
        .catch(() => {
            next('/login')
        })
}

    const routes = [
        {
            path: '/',
            redirect: {name: 'login'},
            component: Guest,
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: Login,
                },
                {
                    path: '/register',
                    name: 'register',
                    component: Register,
                }
            ]
        },
        {
            component: Authenticated,
            beforeEnter: auth,
            children: [
                {
                    path: '/cars',
                    name: 'cars.index',
                    component: VehiclesIndex,
                    meta: {
                        title: 'Electric Vehicles Dashboard',
                    }
                },
                {
                    path: '/cars/create',
                    name: 'cars.create',
                    component: VehiclesCreate,
                    meta: {
                        title: 'Add Electric Vehicle',
                    }
                },
                {
                    path: '/cars/edit/:id',
                    name: 'cars.edit',
                    component: VehiclesEdit,
                    meta: {
                        title: 'Edit Electric Vehicle',
                    }
                },
            ]
        }
    ]


    const router = createRouter({
        history: createWebHistory(),
        routes
    })


    const app = createApp({})
    app.use(router)
    app.use(VueSweetalert2)
    app.component('TailwindPagination', TailwindPagination)
    app.mount('#app')
