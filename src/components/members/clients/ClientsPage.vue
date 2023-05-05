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
                        <Icon slot="icon-only" icon="mdi:delete-empty-outline" class="w-10 h-10"/>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div class="mx-0 bg-fixed pb-0">
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
                                        Client's Name
                                    </h1>

                                </span>
                                <div class="flex">
                                    <ion-button id="Coaching"
                                        class="mx-auto text-white px-3 py-1 font-bold rounded-3xl shadow-none text-xl  md:ml-80 md:-mt-20 mb-10 ">Need
                                        Coaching</ion-button>
                                </div>
                                <ion-alert trigger="Coaching" header="Select Coach" :buttons="alertButtons" mode="ios"
                                    :inputs="Coaches"></ion-alert>
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
                                                <p class="dark:text-gray-600"> Clients Full Name</p>
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
                                                <p class="dark:text-gray-600"> Clients Email</p>
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
                                                <p class="dark:text-gray-600">Male</p>
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
                                                <p class="dark:text-gray-600">903423423423</p>
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
                                                <p class="dark:text-gray-600">Lorem ipsum, dolor sit amet consectetur
                                                    adipisicing elit. Aut vel beatae accusamus dignissimos id. Quo magnam,
                                                    doloremque minus facilis odit est perferendis quisquam! Earum
                                                    reprehenderit, numquam dolor repellendus aperiam quo.</p>
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
                                                <p class="dark:text-gray-600">Lorem ipsum dolor sit, amet consectetur
                                                    adipisicing elit. Omnis adipisci odit, fugiat voluptatem, culpa mollitia
                                                    debitis ipsam maxime impedit tempore fuga dicta sit asperiores libero
                                                    ipsa molestiae iure iusto eligendi.</p>
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
                                                <p class="dark:text-gray-600">Biringan City</p>
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
                                                <p class="dark:text-gray-600">State of the Nation</p>
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
                                                <p class="dark:text-gray-600">666</p>
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
                                                <p class="dark:text-gray-600"> 69</p>
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
                                                <p class="dark:text-gray-600">69</p>
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
                                                <p class="dark:text-gray-600">180</p>
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
                                                <p class="dark:text-gray-600">Noobie</p>
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
                                                <p class="dark:text-gray-600">Chest</p>
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
                                                <p class="dark:text-gray-600">Tuesday, Wednesday, Sunday</p>
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
                                                <p class="dark:text-gray-600">Female</p>
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
                                                <p class="dark:text-gray-600">Clean Cut after this year</p>
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
                                                <p class="dark:text-gray-600">Allergic to Shrimps</p>
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
import { IonPage, IonHeader, IonToolbar, IonContent, IonBackButton, IonButtons, IonTitle, IonRippleEffect, IonButton, IonAlert, } from '@ionic/vue';
import { defineComponent } from 'vue';
import { createOutline, settingsOutline } from 'ionicons/icons';
import backend from '../../../config/axios';
import { Icon } from '@iconify/vue';
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
        IonRippleEffect, IonButton, IonAlert,

    },
    data() {
        return {
            coaches: [],
        };
    },
    async mounted() {
        const coachesResult = await backend.get('/v1/admin/coaches')
        this.coaches = coachesResult.data.data
        console.log(coachesResult)
    },
    setup() {
        const alertButtons = ['OK'];
        const Coaches = [
            {
                label: 'Evelyn',
                type: 'radio',
                value: 'red',
            },
            {
                label: 'Janelle',
                type: 'radio',
                value: 'blue',
            },
            {
                label: 'Ralph',
                type: 'radio',
                value: 'green',
            },
            {
                label: 'Ralph',
                type: 'radio',
                value: 'green',
            },
            {
                label: 'Ralph',
                type: 'radio',
                value: 'green',
            },
            {
                label: 'Ralph',
                type: 'radio',
                value: 'green',
            },
            {
                label: 'Ralph',
                type: 'radio',
                value: 'green',
            },
            {
                label: 'Ralph',
                type: 'radio',
                value: 'green',
            },
            {
                label: 'Ralph',
                type: 'radio',
                value: 'green',
            },
            {
                label: 'Ralph',
                type: 'radio',
                value: 'green',
            },
            {
                label: 'Ralph',
                type: 'radio',
                value: 'green',
            },
            {
                label: 'Ralph',
                type: 'radio',
                value: 'green',
            },
            {
                label: 'Ralph',
                type: 'radio',
                value: 'green',
            },
            {
                label: 'Ralph',
                type: 'radio',
                value: 'green',
            },
        ];
        return { createOutline, settingsOutline, alertButtons, Coaches };
    },

});
</script>
  