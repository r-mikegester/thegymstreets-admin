<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/tabs/Workouts"></ion-back-button>
                </ion-buttons>
                <ion-title><!--Name of Client--></ion-title>
                <ion-buttons slot="primary">
                    <ion-button>
                        <Icon slot="icon-only" icon="mdi:delete-empty-outline" @click="handleDeleteWorkout" class="w-10 h-10" />
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div class="mx-0 bg-fixed pb-0" v-if="workout">
                <div class=" mx-auto min-h-full">
                    <div class="text-center text-gray-800">
                        <div class="block  shadow-lg z-10  -mt-24 md:pb-10 md:py-1  md:px-3 bg-gradient-to-b bg-white w-full md:max-w-full rounded-b-3xl"
                            style="backdrop-filter: blur(50px);">

                            <div class="relative bg-center bg-no-repeat overflow-hidden bg-origin-content bg-cover rounded-3xl  md:shadow-md -z-10  h-full md:h-[350px] filter brightness-50"
                                style="background-position: 100%; ">
                                <img :src="workout.imageUrl"
                                    class="rounded-b-3xl max-h-max w-full -z-30 mt-20" />

                            </div>
                            <div class="z-50 md:-mt-20">

                                <span class="flex mx-auto ">
                                    <h1
                                        class="mx-auto md:mx-72 mt-5 md:-mt-32 md:ml-80 font-semibold  md:font-bold text-gray-900 text-3xl md:text-5xl text">
                                        {{ workout.title }}
                                    </h1>

                                </span>
                                <div class="flex" v-if="workout.muscleGroups" className="flex gap-2 justify-center items-center">
                                    <p
                                        class="text-white px-3 py-1 capitalize font-bold rounded-3xl text-xl bg-[#004aad] md:ml-80 md:-mt-20 mb-10 "
                                        v-for="group in workout.muscleGroups"
                                        :key="group"
                                    >
                                        {{   group }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" grid md:grid-cols-6 md:gap-6 gap-3 mt-3 mx-3">

                        <div class=" mx-0  my-3 justify-center md:col-span-3">
                            <div
                                class=" bg-white max-w-9xl md:max-w-full text-gray-900  row-span-3 row-start-1 mx-3 justify-center md:mx-0 row-end-3 rounded-3xl">
                                <div class="flex flex-col shadow-md max-w-9xl rounded-3xl  h-full">
                                    <div class="h-10 rounded-t-3xl mx-5 py-5 px-3 text-xl font-bold">Workout Information
                                    </div>

                                    <div class=" p-3 rounded-2xl m-2">

                                        <a href="https://m.facebook.com/TheGymStreet"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="ph:text-t-bold" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5 overflow-hidden" title="supp.mikegester@gmail.com">
                                                <p class="text-xl text-gray-800  font-semibold">Workout Name</p>
                                                <p class="dark:text-gray-600"> {{ workout.title }}</p>
                                            </div>
                                        </a>
                                        <a href="https://m.facebook.com/TheGymStreet"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="bi:text-paragraph" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5 overflow-hidden" title="supp.mikegester@gmail.com">
                                                <p class="text-xl text-gray-800  font-semibold"> Description</p>
                                                <p class="dark:text-gray-600"> {{ workout.description }}</p>
                                            </div>
                                        </a>

                                        <a href="tel:09357456767"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="typcn:arrow-repeat" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold"> Reps </p>
                                            <p class="dark:text-gray-600">{{ workout.reps }}</p>
                                            </div>
                                        </a>

                                        <a href="tel:09357456767"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="ant-design:flag-outlined" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold"> Sets </p>
                                                <p class="dark:text-gray-600">{{ workout.set  }}</p>
                                            </div>
                                        </a>
                                        <a href="tel:09357456767"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="fluent:time-picker-20-filled" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold">Time</p>
                                                <p class="dark:text-gray-600">{{ workout.time }} seconds</p>
                                            </div>
                                        </a>
                                       
                                      

                                        <a :href="workout.youtubeUrl"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="icon-park-outline:youtube" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold"> Youtube URL</p>
                                                <p class="dark:text-gray-600">{{ workout.youtubeUrl }}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </div>


        </ion-content>
    </ion-page>
</template>
    
<script>
import { IonPage, IonHeader, IonToolbar, IonContent, IonBackButton, IonButtons, IonTitle, IonRippleEffect, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { createOutline, settingsOutline } from 'ionicons/icons';
import backend from '../../../config/axios';
import { Icon } from '@iconify/vue';
import { alertController } from '@ionic/vue';
import { Toast } from '@capacitor/toast';
export default defineComponent({
    components: {
        // IonCardHeader,
        //  IonCardSubtitle,
        //  IonCardTitle,
        IonPage,
        IonHeader,
        IonToolbar,
        IonContent,
        IonBackButton,
        IonButtons,
        IonTitle,
        Icon,
        IonRippleEffect, IonButton

    },
    setup() {
        return { createOutline, settingsOutline };
    },
    data() {
        return {
            workout: [],
        };
    },
    async mounted() {
        const id = this.$route.params.id
        const workoutsResult = await backend.get(`/v1/admin/workout-library/${id}`)

        this.workout = workoutsResult.data.data
        console.log(this.workout)
    },
    methods: {
        async handleDeleteWorkout() {
            const alert = await alertController.create({
                mode: 'ios',
                header: 'Delete Workout',
                message: 'This will delete the Workout and is unreversible. Continue?',
                buttons: [{
                    text: 'Yes',
                    role: 'destructive',
                    handler: async () => {
                        await backend.delete(`/v1/admin/workout-library/${this.workout.id}`)

                        await Toast.show({
                            text: 'Deleted successfully.',
                        });

                        this.$router.push('/tabs/Workouts')
                    }
                }, {
                    text: 'No',
                    role: 'cancel'
                }],
            });

            await alert.present();
        }
    }
});
</script>
    