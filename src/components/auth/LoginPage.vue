<template>
    <ion-content>
        <section class="bg-[#004aad]">
            <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <form class="w-full max-w-md">
                    <img class="w-auto h-56 mx-auto" src="../../assets/imgs/logo/theGYMStreet.jpg" alt="">



                    <div class="relative flex items-center mt-8">
                        <span class="absolute">
                            <Icon icon="material-symbols:alternate-email-rounded"
                                class="w-10 h-10 mx-5 text-gray-300 dark:text-gray-500" />
                        </span>

                        <!--EMAIL INPUT-->
                        <input type="email"
                            class="block w-full  py-5 text-gray-700 text-xl bg-white rounded-xl px-20 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Email address" :required="true" :clear-input="true">
                    </div>

                    <div class="relative flex items-center mt-4">
                        <span class="absolute">
                            <Icon icon="carbon:password" class="w-10 h-10 mx-5 text-gray-300 dark:text-gray-500" />

                        </span>

                        <input type="password"
                            class="block w-full px-20 py-5 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Password" :required="true">
                    </div>

                    <div class="mt-6">
                        <button type="button" @click="login"
                            class="w-full px-6 py-5 text-xl font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-xl hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Login
                        </button>

                        <p class="mt-4 text-center text-gray-400 dark:text-gray-400">or</p>

                        <a href="#"
                            class="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border-2 rounded-xl dark:border-white dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white hover:text-gray-900">
                            <svg class="w-10 h-10 mx-2" viewBox="0 0 40 40">
                                <path
                                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                    fill="#FFC107" />
                                <path
                                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                    fill="#FF3D00" />
                                <path
                                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                    fill="#4CAF50" />
                                <path
                                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                    fill="#1976D2" />
                            </svg>

                            <span class="mx-2">Login with Google</span>
                        </a>

                        <div class="mt-6 text-center ">
                            <!-- <a href="#" class="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                Don’t have an account yet? Sign up
                            </a>-->
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </ion-content>
</template>
    
<script>
import { IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useMenuStore } from '../../stores/useMenuStore';
import { Icon } from '@iconify/vue';
export default defineComponent({
    methods: {

    },
    components: {
        IonContent,
        Icon
    },
    setup() {
        const store = useMenuStore()
        const router = useRouter()
        function login() {
            console.log("hello world");
            router.push("/tabs/Dashboard")
            store.setSwipable()
        }

        return {
            login
        }
    },

})
</script>