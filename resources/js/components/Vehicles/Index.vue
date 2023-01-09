<template>

    <form class="flex items-center w-96 px-6 py-2">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input v-model = "search" name = "search" type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
        </div>
    </form>
    <div class="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
        <div class="min-w-full align-middle">
            <table class="min-w-full divide-y divide-gray-200 border">
                <thead>
                <tr>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Id</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Company</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Model</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Price</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Year</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <span class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Action</span>
                    </th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                <tr v-for="car in cars.data" :key = "car.id">
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ car.id }}</td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ car.company }}</td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ car.model }}</td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ car.price }}</td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ car.year }}</td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                        <router-link :to =" { name: 'cars.edit', params: {id: car.id}} ">Edit</router-link>
                    </td>
                </tr>
                </tbody>
            </table>

            <TailwindPagination class = "py-4"
                :data="cars"
                @pagination-change-page="fetchCars"
            />
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                cars: {},
                search: ''
            }
        },
        mounted() {
            this.fetchCars();
        },
        watch:{
            search(){
                this.fetchCars();
            }
        },
        methods: {
            async fetchCars(page = 1){
                try{
                    const response = await axios.get('/api/cars',{
                            params: {
                                page,
                                search: this.search.length >= 3 ? this.search :'',
                            }
                        }
                    );
                    this.cars = response.data;
                } catch(error) {
                    console.log(error);
                }
            }
        }
    }




</script>
