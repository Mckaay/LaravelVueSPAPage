require('./bootstrap');

import { createApp } from 'vue';

import VehiclesIndex from './components/Vehicles/Index.vue';

const app = createApp({})
app.component('vehicles-index',VehiclesIndex)
app.mount('#app')
