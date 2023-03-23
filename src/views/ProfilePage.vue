<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <div class="bg-fixed pb-96">
        <div class="container mx-auto min-h-full">
          <div class="text-center text-gray-800">
            <div
              class="block  shadow-lg z-10  -mt-24 md:pb-1 md:py-10 md:px-3 bg-gradient-to-b bg-white w-full rounded-b-3xl"
              style="backdrop-filter: blur(50px);">

              <div
                class="relative bg-center bg-no-repeat overflow-hidden bg-origin-content bg-cover rounded-3xl  md:shadow-md -z-10  h-96 md:h-[500px] filter brightness-50"
                style="background-position: 100%; ">
                <img src="../assets/imgs/logo/theGYMStreet-BG.jpg" class="rounded-b-3xl max-h-max w-full -z-30 mt-20" />

              </div>
              <div class="z-50 -mt-40 md:-mt-20">
                <img src="../assets/imgs/logo/theGYMStreet.jpg"
                  class="rounded-full w-64 h-64 md:w-56 md:h-56 -mt-16 md:mx-16 mx-auto border-4 border-blue-600 p-1 z-50" />
                <span class="flex mx-auto ">
                  <h1
                    class="mx-auto md:mx-72 mt-5 md:-mt-32 md:ml-80 font-semibold  md:font-bold text-gray-700 text-3xl md:text-5xl text">
                    The Gym Street
                  </h1>

                </span>
                <div class="flex">
                  <p class="mx-auto text-white px-3 py-2 rounded-xl bg-gray-400 md:ml-80 md:-mt-20 mb-10">ADMIN </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-auto">
            <div class="md:m-20 mx-0  my-5 justify-center">
              <div
                class=" bg-white max-w-9xl text-gray-900 col-span-3 md:col-span-2 row-span-3 row-start-1 mx-3 justify-center md:mx-0 row-end-3 rounded-3xl">
                <div class="flex flex-col shadow-md max-w-3xl rounded-3xl  h-full">
                  <div class="h-10 rounded-t-3xl mx-5 py-5 px-3 text-xl font-semibold">Social Links</div>

                  <div class=" p-6 rounded-2xl mx-2">

                    <div class="flex  border-gray-200 dark:border-gray-700 py-2.5">
                      <span class="p-2 bg-white rounded-md text-blue-600">
                        <Icon icon="ant-design:facebook-outlined" class="w-10 h-10" />
                      </span>
                      <div class="text-left ml-2.5 overflow-hidden" title="supp.mikegester@gmail.com">
                        <p class="text-xl text-gray-600 dark:text-gray-900"> Facebook Page </p>
                        <p class="dark:text-gray-900"> The Gym Street</p>
                      </div>
                    </div>
                    <div class="flex  border-gray-200 dark:border-gray-700 py-2.5">
                      <span class="p-2 bg-white rounded-md text-blue-600">
                        <Icon icon="basil:facebook-messenger-outline" class="w-10 h-10" />
                      </span>
                      <div class="text-left ml-2.5">
                        <p class="text-xl text-gray-600 dark:text-gray-900"> Messenger </p>
                        <p class="dark:text-gray-900"> The Gym Street</p>
                      </div>
                    </div>

                    <div class="flex  border-gray-200 dark:border-gray-700 py-2.5">
                      <span class="p-2 bg-white rounded-md text-blue-600">
                        <Icon icon="heroicons-outline:phone" class="w-10 h-10" />
                      </span>
                      <div class="text-left ml-2.5">
                        <p class="text-xl text-gray-600 dark:text-gray-900"> Phone Number </p>
                        <p class="dark:text-gray-900">0935 745 6767</p>
                      </div>
                    </div>



                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mx-auto">
            <div class="md:m-20 mx-0  my-5 justify-center">
              <div
                class=" bg-white max-w-9xl text-gray-900 col-span-3 md:col-span-2 row-span-3 row-start-1 mx-3 justify-center md:mx-0 row-end-3 rounded-3xl">
                <div class="flex flex-col shadow-md max-w-3xl rounded-3xl  h-full">


                  <div class=" p-6 rounded-2xl mx-2">
                    <div class="flex py-2.5">
                      <span class="p-2 bg-white rounded-md  text-blue-600">
                        <Icon icon="fluent-mdl2:edit-contact" class="w-10 h-10" />
                      </span>
                      <div class="text-left ml-2.5">
                        <p class="text-xl text-gray-600 dark:text-gray-900 mt-3">Edit Profile</p>
                      </div>
                    </div>
                    <div class="flex py-2.5">
                      <span class="p-2 bg-white rounded-md  text-blue-600">
                        <Icon icon="grommet-icons:map-location" class="w-10 h-10" />
                      </span>
                      <div class="text-left ml-2.5">
                        <p class="text-xl text-gray-600 dark:text-gray-900 mt-3">Location</p>
                      </div>
                    </div>
                    <div class="flex py-2.5">
                      <span class="p-2 bg-white rounded-md  text-blue-600">
                        <Icon icon="heroicons-outline:logout" class="w-10 h-10" />
                      </span>
                      <div class="text-left ml-2.5">
                        <p class="text-xl text-gray-600 dark:text-gray-900 mt-3"> Logout</p>
                      </div>
                    </div>
                    <div class="flex py-2.5">
                      <span class="p-2 bg-white rounded-md  text-blue-600">
                        <Icon icon="ci:settings" class="w-10 h-10" />
                      </span>
                      <div class="text-left ml-2.5">
                        <p class="text-xl text-gray-600 dark:text-gray-900 mt-3"> Settings </p>
                      </div>
                    </div>

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
import { IonPage, IonContent, IonToolbar, IonHeader, IonTitle } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
import { createOutline, settingsOutline } from 'ionicons/icons';
export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    Icon,
    IonHeader,
    IonTitle
  },

  setup() {
    return { createOutline, settingsOutline };
  }
})
</script>