<template>
    <form @submit.prevent="test">
        <div>
            <label for="car-company" class="block font-medium text-sm text-gray-700">
                Company
            </label>
            <input id="car-company" type="text" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
        </div>

        <div class="mt-4">
            <label for="car-model" class="block font-medium text-sm text-gray-700">
                Model
            </label>
            <input id="car-model" type = "text" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
        </div>

        <div class="mt-4">
            <label for="car-price" class="block font-medium text-sm text-gray-700">
                Price
            </label>
            <input id="car-price" type = "number" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" step="0.01" min="0.01" required>
        </div>
        <div class="mt-4">
            <label for="car-year" class="block font-medium text-sm text-gray-700">
                Production year
            </label>
            <input id="car-year" type = "number" min = "1900" max = "2023" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" step = "1" required>
        </div>

        <div class="mt-4">
            <button class="px-3 py-2 bg-blue-600 text-white rounded">Save</button>
        </div>
    </form>
</template>


<script>


</script>
