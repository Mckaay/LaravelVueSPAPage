<template>
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
                <tr v-for="car in cars">
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ car.id }}</td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ car.company }}</td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ car.model }}</td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ car.price }}</td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{{ car.year }}</td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                cars: []
            }
        },
        mounted() {
            this.fetchCars();
        },
        methods: {
            async fetchCars(){
                try{
                    const response = await axios.get('/api/cars');
                    this.cars = response.data.data;
                } catch(error) {
                    console.log(error);
                }
            }
        }
    }




</script>
