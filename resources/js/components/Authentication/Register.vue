<template>

    <form @submit.prevent="registerUser">
        <div class = "max-w-md m-auto">

            <div class="mt-4">
                <label for="name" class="block font-medium text-sm text-gray-700">
                    Name
                </label>
                <input v-model="registerForm.name" id="name" type="text" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required autocomplete="Your Name">
            </div>
            <!-- Email -->
            <div>
                <label for="email" class="block font-medium text-sm text-gray-700">
                    Email
                </label>
                <input v-model="registerForm.email" id="email" type="email" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required autofocus autocomplete="email">
            </div>
            <div class = "text-red-600 mt-1">
                {{ validationError }}
            </div>
            <!-- Password -->
            <div class="mt-4">
                <label for="password" class="block font-medium text-sm text-gray-700">
                    Password
                </label>
                <input v-model="registerForm.password" id="password" type="password" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required autocomplete="current-password">
            </div>
            <div class="mt-4">
                <label for="password-confirmation" class="block font-medium text-sm text-gray-700">
                    Password Confirmation
                </label>
                <input v-model="registerForm.password_confirmation" id="password-confirmation" type="password" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required autocomplete="Confirm password">
            </div>
            <!-- Buttons -->
            <div class="flex items-center justify-center mt-4">
                <button class="inline-flex items-center px-6 py-2 bg-gray-800 border border-transparent rounded-md font-semi-bold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150 ml-4">
                    Register
                </button>
            </div>
        </div>
    </form>

    <div class = "text-center mt-4">
        Already have an account? <router-link :to =" { name: 'login'} "><span class ="text-blue-600 ml-2">Sign in</span></router-link>
    </div>

</template>


<script>
import { useRouter } from 'vue-router';

export default {

    data() {
        return {
            registerForm: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                is_admin: false
            },
            validationError: '',
            router: useRouter(),
        }
    },
    mounted(){
        this.checkIfUserIsLoggedIn();
    },
    methods: {
        registerUser() {
            axios.post('/register',this.registerForm)
                .then( res => {
                    console.log(res);
                    this.router.push( { name: 'login'});
                    this.$swal({
                        icon:'success',
                        title: 'User Successfully Created'
                    })
                })
                .catch(error => {
                    if(error.response){
                        console.log(error.response);
                        this.validationError = error.response.data.message;
                    }
                })
        },
        checkIfUserIsLoggedIn(){
            axios.get('/api/authenticated')
                .then(() => {
                    this.router.push({ name: 'cars.index'})
                })
        }
    }
}

</script>
