require('./bootstrap');

import { createApp } from 'vue';

import VehiclesIndex from './components/Vehicles/Index.vue';

import { TailwindPagination } from 'laravel-vue-pagination';

const app = createApp({})
app.component('vehicles-index',VehiclesIndex)
app.component('TailwindPagination', TailwindPagination);
app.mount('#app')
