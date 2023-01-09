<template>
    <form @submit.prevent="storeCars">
        <div>
            <label for="car-company" class="block font-medium text-sm text-gray-700">
                Company
            </label>
            <input v-model = "car.company" id="car-company" type="text" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
        </div>

        <div class="mt-4">
            <label for="car-model" class="block font-medium text-sm text-gray-700">
                Model
            </label>
            <input v-model = "car.model" id="car-model" type = "text" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
        </div>

        <div class="mt-4">
            <label for="car-price" class="block font-medium text-sm text-gray-700">
                Price
            </label>
            <input v-model = "car.price" id="car-price" type = "number" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" step="0.01" min="0.01" required>
        </div>
        <div class="mt-4">
            <label for="car-year" class="block font-medium text-sm text-gray-700">
                Production year
            </label>
            <input v-model = "car.year" id="car-year" type = "number" min = "1900" max = "2023" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" step = "1" required>
        </div>
        <div class="mt-4">
            <button type ="submit" class="px-3 py-2 bg-blue-600 text-white rounded">Save</button>
        </div>
    </form>
</template>


<script>
    import { useRouter } from 'vue-router';

    export default {
        data() {
            return {
                car: {
                    company: '',
                    model: '',
                    price: '',
                    year: '',
                },
                router: useRouter()
            }
        },
        methods: {
            async storeCars(){
                try{
                    console.log('storeCars');
                    const response = await axios.post('/api/cars',this.car);
                    await this.router.push({ name: 'cars.index'});
                } catch(error) {
                    console.log(error);
                }
            }
        }
    }




</script>
