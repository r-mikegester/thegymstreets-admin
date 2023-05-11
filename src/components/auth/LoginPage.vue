<template>
    <ion-content>
        <section class="bg-[#004aad]">
            <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <form @submit.prevent="login" class="w-full max-w-md">
                    <img class="w-auto h-36 mx-auto" src="../../assets/imgs/logo/theGYMStreet.jpg" alt="">


                    <div class="relative flex items-center mt-8 p-10 pb-0">
                        <span class="absolute">
                            <Icon icon="material-symbols:alternate-email-rounded"
                                class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                        </span>

                        <!--EMAIL INPUT-->
                        <input type="email" v-model="email" required
                            class="block w-full  py-3 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Email address" :clear-input="true">
                    </div>

                    <div class="relative flex items-center p-10 pt-2 pb-0">
                        <span class="absolute">
                            <Icon icon="carbon:password" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />

                        </span>

                        <input type="password" v-model="password" required
                            class="block w-full px-16 pr-5 py-3 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Password">
                    </div>

                    <div class=" p-10 pt-2">
                        <button type="submit"
                            class="w-full px-6 py-3 text-xl font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-xl hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Login
                        </button>

                    </div>
                </form>
             
            </div>
        </section>
    </ion-content>
</template>
    
<script>
import { IonContent, toastController, } from '@ionic/vue';
import { checkmarkCircleOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
import router from '../../router/index';
import backend from '../../config/axios'

export default defineComponent({
    components: {
        IonContent,
        Icon,
     
    },
    router,
    data() {
        return {
            email: '',
            password: '',
            checkmarkCircleOutline
        };
    },

    methods: {
        async login() {
            try {
                const response = await backend.post('/v1/admin/auth/login', {
                    email: this.email,
                    password: this.password
                })

                localStorage.setItem('access_token', response.data.access.token)

                this.$router.push('/tabs/Dashboard');

                const toast = await toastController.create({
                    mode: 'ios',
                    message: 'Login successful',
                    duration: 100,
                    showCloseButton: true,
                    closeButtonText: '',
                    position: 'top',
                });
                await toast.present();
            } catch(error) {
                console.log(error)
                const toast = await toastController.create({
                    mode: 'ios',
                    message: 'Invalid email or password',
                    duration: 2000,
                    showCloseButton: true,
                    closeButtonText: 'Dismiss',
                    position: 'top',
                });
                await toast.present();
            }
        },
 
    }
});

</script>