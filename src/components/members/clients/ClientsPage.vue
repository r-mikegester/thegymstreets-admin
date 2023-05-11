<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/tabs/Members"></ion-back-button>
                </ion-buttons>
                <ion-title><!--Name of Client--></ion-title>
                <ion-buttons slot="primary">
                    <ion-button>
                        <Icon slot="icon-only" icon="mdi:delete-empty-outline" @click="handleDeleteClient" class="w-10 h-10"/>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div class="mx-0 bg-fixed pb-0" v-if="client">
                <div class=" mx-auto min-h-full">
                    <div class="text-center text-gray-800">
                        <div class="block  shadow-lg z-10  -mt-24 md:pb-10 md:py-1  md:px-3 bg-gradient-to-b bg-white w-full md:max-w-full rounded-b-3xl"
                            style="backdrop-filter: blur(50px);">

                            <div class="relative bg-center bg-no-repeat overflow-hidden bg-origin-content bg-cover rounded-3xl  md:shadow-md -z-10  h-96 md:h-[350px] filter brightness-50"
                                style="background-position: 100%; ">
                                <img src="../../../assets/imgs/logo/theGYMStreet-BG.jpg"
                                    class="rounded-b-3xl max-h-max w-full -z-30 mt-20" />

                            </div>
                            <div class="z-50 -mt-40 md:-mt-20">
                                <img alt="Silhouette of a person's head"
                                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                                    class="rounded-full w-48 h-48 md:w-56 md:h-56 -mt-16 md:mx-16 mx-auto border-4 border-[#004aad] p-1 z-50" />
                                <span class="flex mx-auto ">
                                    <h1
                                        class="mx-auto md:mx-72 mt-5 md:-mt-32 md:ml-80 font-semibold  md:font-bold text-gray-900 text-3xl md:text-5xl text">
                                        {{ client.firstName }} {{ client.middleName }} {{   client.lastName }}
                                    </h1>

                                </span>
                                <div class="flex">
                                    <ion-button  shape="round" 
                                        class="mx-auto text-white font-bold rounded-3xl shadow-none text-xl  md:ml-80 md:-mt-20 mb-10"
                                        id="open-modal"
                                    >
                                        <span v-if="client.requiresCoaching">Assign Coach</span>
                                        <span v-if="!client.requiresCoaching">Change Coach</span>
                                    </ion-button>
                                    
                                    <ion-modal 
                                        mode="md"
                                        ref="modal"
                                        trigger="open-modal"
                                        :initial-breakpoint="0.75"
                                        :breakpoints="[0, 0.25, 0.5, 0.75]"
                                        handle-behavior="cycle"
                                    >
                                        <ion-content class="">
                                            <ion-header>
                                                <ion-toolbar>
                                                    <ion-title class="text-center">Assign a Coach</ion-title>
                                                </ion-toolbar>
                                            </ion-header>
                                            <ion-list>
                                                <ion-item lines="none" 
                                                    v-for="coach in coaches"
                                                    :key="coach.id" 
                                                    class=" rounded-3xl my-1"
                                                    @click="handleAddCoaching(coach)"
                                                >
                                                    <ion-avatar slot="start">
                                                    <ion-img class="w-10 h-10" :src="'https://api.dicebear.com/6.x/initials/svg?seed=' + coach.firstName"></ion-img>
                                                    </ion-avatar>
                                                    <ion-label class="!text-gray-900">
                                                        <h2>{{ coach.firstName }} {{ coach.lastName }} <span v-if="client.coachings && client.coachings[0] && client.coachings[0].coachId == coach.id" class="!text-gray-800">
                                                            (Current Coach)
                                                        </span></h2>
                                                    </ion-label>
                                                </ion-item>
                                            </ion-list>
                                        </ion-content>
                                    </ion-modal>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" grid md:grid-cols-6 md:gap-6 gap-3 mt-3 mx-3">
                      
                        <div class=" mx-0  mt-3 justify-center md:col-span-3">
                            <div
                                class=" bg-white max-w-9xl md:max-w-full text-gray-900  row-span-3 row-start-1 mx-3 justify-center md:mx-0 row-end-3 rounded-3xl">
                                <div class="flex flex-col shadow-md max-w-9xl rounded-3xl  h-full">
                                    <div class="h-10 rounded-t-3xl mx-5 py-5 px-3 text-xl font-bold">Personal Information
                                    </div>

                                    <div class=" p-3 rounded-2xl m-2">

                                        <a href="https://m.facebook.com/TheGymStreet"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="ion:text" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5 overflow-hidden" title="supp.mikegester@gmail.com">
                                                <p class="text-xl text-gray-800  font-semibold">Full Name </p>
                                                <p class="dark:text-gray-600"> {{ client.firstName }} {{ client.middleName}} {{ client.lastName }}</p>
                                            </div>
                                        </a>
                                        <a href="https://m.facebook.com/TheGymStreet"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="material-symbols:alternate-email-rounded" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5 overflow-hidden" title="supp.mikegester@gmail.com">
                                                <p class="text-xl text-gray-800  font-semibold">Email Address </p>
                                                <p class="dark:text-gray-600"> {{ client.email }}</p>
                                            </div>
                                        </a>

                                        <a href="tel:09357456767"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="mdi:gender-male-female" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold"> Gender </p>
                                                <p class="dark:text-gray-600">{{ client.gender }}</p>
                                            </div>
                                        </a>

                                        <a href="tel:09357456767"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="heroicons-outline:phone" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold"> Phone </p>
                                                <p class="dark:text-gray-600">{{ client.phone}}</p>
                                            </div>
                                        </a>
                                        <a href="tel:09357456767"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="uil:wrap-text" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold"> Line1 </p>
                                                <p class="dark:text-gray-600">{{ client.line1}}</p>
                                            </div>
                                        </a>
                                        <a href="tel:09357456767"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="uil:wrap-text" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold"> Line2 </p>
                                                <p class="dark:text-gray-600">{{ client.line2 }}</p>
                                            </div>
                                        </a>
                                        <a href="tel:09357456767"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="solar:city-outline" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold"> City </p>
                                                <p class="dark:text-gray-600">{{ client.city}}</p>
                                            </div>
                                        </a>
                                        <a href="tel:09357456767"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="tabler:building-estate" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold"> State </p>
                                                <p class="dark:text-gray-600">{{client.state}}</p>
                                            </div>
                                        </a>
                                        <a href="tel:09357456767"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="ic:round-share-location" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold"> Postal Code </p>
                                                <p class="dark:text-gray-600">{{ client.postalCode }}</p>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class=" grid md:grid-cols-6 md:gap-6 gap-3 mt-3 mx-3">

                        <div class=" mx-0  my-3 justify-center md:col-span-3">
                            <div
                                class=" bg-white max-w-9xl md:max-w-full text-gray-900  row-span-3 row-start-1 mx-3 justify-center md:mx-0 row-end-3 rounded-3xl">
                                <div class="flex flex-col shadow-md max-w-9xl rounded-3xl  h-full">
                                    <div class="h-10 rounded-t-3xl mx-5 py-5 px-3 text-xl font-bold">Additional Information
                                    </div>

                                    <div class=" p-3 rounded-2xl m-2">

                                        <a href="https://m.facebook.com/TheGymStreet"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="tabler:calendar" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5 overflow-hidden" title="supp.mikegester@gmail.com">
                                                <p class="text-xl text-gray-800  font-semibold">Age </p>
                                                <p class="dark:text-gray-600"> {{client.age}}</p>
                                            </div>
                                        </a>
                                        <a href="https://m.facebook.com/TheGymStreet"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="uil:weight" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5 overflow-hidden" title="supp.mikegester@gmail.com">
                                                <p class="text-xl text-gray-800  font-semibold">Weight in kg.</p>
                                                <p class="dark:text-gray-600">{{ client.weight }}</p>
                                            </div>
                                        </a>

                                        <a href="tel:09357456767"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="game-icons:body-height" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold"> Height in cm </p>
                                                <p class="dark:text-gray-600">{{ client.height }}</p>
                                            </div>
                                        </a>

                                        <a href="tel:09357456767"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="emojione-monotone:level-slider" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold">Workout Level</p>
                                                <p class="dark:text-gray-600">{{ client.workoutLevel }}</p>
                                            </div>
                                        </a>
                                        <a href="tel:09357456767"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="iconoir:gym" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold"> Workout Preference </p>
                                                <p class="dark:text-gray-600">{{ client.workoutPreference }}</p>
                                            </div>
                                        </a>
                                        <a href="tel:09357456767"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="mdi:event-available-outline" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold">Availability </p>
                                                <p class="dark:text-gray-600">{{ client.availability}}</p>
                                            </div>
                                        </a>
                                        <a href="tel:09357456767"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="iconoir:verified-user" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold">Preferred Coach Gender </p>
                                                <p class="dark:text-gray-600">{{ client.coachGenderPreference }}</p>
                                            </div>
                                        </a>
                                        <a href="tel:09357456767"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="octicon:goal-16" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold"> Goal</p>
                                                <p class="dark:text-gray-600">{{ client.goal }}</p>
                                            </div>
                                        </a>
                                        <a href="tel:09357456767"
                                            class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                                            <ion-ripple-effect></ion-ripple-effect>
                                            <span class="p-2 bg-white rounded-md text-[#004aad]">
                                                <Icon icon="solar:notes-outline" class="w-10 h-10" />
                                            </span>
                                            <div class="text-left ml-2.5">
                                                <p class="text-xl text-gray-800  font-semibold"> Notes </p>
                                                <p class="dark:text-gray-600">{{ client.notes }}</p>
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
import { IonPage, IonHeader, IonToolbar, IonContent, IonBackButton, IonButtons, IonTitle, IonRippleEffect, IonButton, IonItem, IonList, IonModal, IonLabel, IonAvatar, IonImg, alertController } from '@ionic/vue';
import { defineComponent } from 'vue';
import backend from '../../../config/axios';
import { Icon } from '@iconify/vue';
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
        IonRippleEffect, IonButton,  IonItem, IonList, IonModal, IonLabel, IonAvatar, IonImg

    },
    data() {
        return {
            client: null,
            coaches: []
        };
    },
    async mounted() {
        const id = this.$route.params.id
        const clientResult = await backend.get(`/v1/admin/clients/${id}`)
        this.client = clientResult.data.data

        console.log(this.client)
        
        const coachesResult = await backend.get(`/v1/admin/coaches`)
        this.coaches = coachesResult.data.data

    },
    methods: {
        async handleAddCoaching(coach) {
            await backend.post(`/v1/admin/coachings`, {
                clientId: this.client.id,
                coachId: coach.id
            })

            window.location.reload()
        },
        async handleDeleteClient() {
            const alert = await alertController.create({
                mode: 'ios',
                header: 'Delete Client',
                message: 'This will delete the client and is unreversible. Continue?',
                buttons: [{
                    text: 'Yes',
                    role: 'destructive',
                    handler: async () => {
                        await backend.delete(`/v1/admin/clients/${this.client.id}`)

                        await Toast.show({
                            text: 'Deleted successfully.',
                        });

                        this.$router.push('/tabs/Members')
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
  