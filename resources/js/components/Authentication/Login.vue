<template>

    <form @submit.prevent="submitLogin">
        <div class = "max-w-md m-auto">
            <!-- Email -->
            <div>
                <label for="email" class="block font-medium text-sm text-gray-700">
                    Email
                </label>
                <input v-model="loginForm.email" id="email" type="email" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required autofocus autocomplete="username">
            </div>
            <div class = "text-red-600 mt-1">
                {{ validationError }}
            </div>
            <!-- Password -->
            <div class="mt-4">
                <label for="password" class="block font-medium text-sm text-gray-700">
                    Password
                </label>
                <input v-model="loginForm.password" id="password" type="password" class="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required autocomplete="current-password">
            </div>
            <!-- Buttons -->
            <div class="flex items-center justify-center mt-4">
                <button class="inline-flex items-center px-6 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150 ml-4">
                    Log in
                </button>
            </div>
        </div>
        <div class = "text-center mt-4">
            Don't have an account? <router-link :to =" { name: 'register'} "><span class ="text-blue-600 ml-2">Register account</span></router-link>
        </div>
    </form>


</template>


<script>
import { useRouter } from 'vue-router';

export default {

data() {
        return {
            loginForm: {
                email: '',
                password: '',
                remember: false
            },
            validationError: '',
            router: useRouter(),
        }
    },
    mounted(){
    this.checkIfUserIsLoggedIn();
    },
    methods: {
        submitLogin() {
            axios.post('/login',this.loginForm)
                .then( async res => {
                    await this.loginUser(res);
                })
                .catch(error => {
                    if(error.response){
                        this.validationError = error.response.data.message;
                    }
                })
        },
        loginUser(res) {
            this.router.push( { name: 'cars.index'});
            this.$swal({
                icon:'success',
                title: 'Successfully Logged In'
            })
        },
        checkIfUserIsLoggedIn(){
            axios.get('/api/authenticated')
                .then(() => {
                    this.router.push({ name: 'cars.index'})
                }).catch(error => {
            })
        }

    }
}

</script>
