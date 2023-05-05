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
            <div
              class="block  shadow-lg z-10  -mt-24 md:pb-10 md:py-1  md:px-3 bg-gradient-to-b bg-white w-full md:max-w-full rounded-b-3xl"
              style="backdrop-filter: blur(50px);">

              <div
                class="relative bg-center bg-no-repeat overflow-hidden bg-origin-content bg-cover rounded-3xl  md:shadow-md -z-10  h-96 md:h-[350px] filter brightness-50"
                style="background-position: 100%; ">
                <img src="../../../assets/imgs/logo/theGYMStreet-BG.jpg"
                  class="rounded-b-3xl max-h-max w-full -z-30 mt-20" />

              </div>
              <div class="z-50 -mt-40 md:-mt-20">
                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  class="rounded-full w-48 h-48 md:w-56 md:h-56 -mt-16 md:mx-16 mx-auto border-4 border-[#004aad] p-1 z-50" />
                <span class="flex mx-auto ">
                  <h1
                    class="mx-auto md:mx-72 mt-5 md:-mt-32 md:ml-80 font-semibold  md:font-bold text-gray-900 text-3xl md:text-5xl text">
                    Coach Name
                  </h1>

                </span>
                <div class="flex">
                  <p
                    class="mx-auto text-white px-3 py-1 font-bold rounded-3xl text-xl bg-[#004aad] md:ml-80 md:-mt-20 mb-10 ">
                    3/3 </p>
                </div>
              </div>
            </div>
          </div>
          <div class=" grid md:grid-cols-6 md:gap-6 gap-3 mt-3 mx-3">

            <div class=" mx-0  my-3 justify-center md:col-span-3">
              <div
                class=" bg-white max-w-9xl md:max-w-full text-gray-900  row-span-3 row-start-1 mx-3 justify-center md:mx-0 row-end-3 rounded-3xl">
                <div class="flex flex-col shadow-md max-w-9xl rounded-3xl  h-full">
                  <div class="h-10 rounded-t-3xl mx-5 py-5 px-3 text-xl font-bold">Personal Information</div>

                  <div class=" p-3 rounded-2xl m-2">

                    <a href="https://m.facebook.com/TheGymStreet"
                      class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                      <ion-ripple-effect></ion-ripple-effect>
                      <span class="p-2 bg-white rounded-md text-[#004aad]">
                        <Icon icon="ion:text" class="w-10 h-10" />
                      </span>
                      <div class="text-left ml-2.5 overflow-hidden" title="supp.mikegester@gmail.com">
                        <p class="text-xl text-gray-800  font-semibold">Full Name </p>
                        <p class="dark:text-gray-600"> Coach Full Name</p>
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
                        <p class="dark:text-gray-600"> Coach Email</p>
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
      clients: [],
    };
  },
  async mounted() {
    const clientsResult = await backend.get('/v1/admin/clients')
    this.clients = clientsResult.data.data
  },
});
</script>
  