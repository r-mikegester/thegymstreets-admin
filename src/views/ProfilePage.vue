<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Profile</ion-title>
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
                <img src="../assets/imgs/logo/theGYMStreet-BG.jpg" class="rounded-b-3xl max-h-max w-full -z-30 mt-20" />

              </div>
              <div class="z-50 -mt-40 md:-mt-20">
                <img src="../assets/imgs/logo/theGYMStreet.jpg"
                  class="rounded-full w-48 h-48 md:w-56 md:h-56 -mt-16 md:mx-16 mx-auto border-4 border-[#004aad] p-1 z-50" />
                <span class="flex mx-auto ">
                  <h1
                    class="mx-auto md:mx-72 mt-5 md:-mt-32 md:ml-80 font-semibold  md:font-bold text-gray-900 text-3xl md:text-5xl text">
                    The Gym Street
                  </h1>

                </span>
                <div class="flex">
                  <p class="mx-auto text-white px-3 py-1 font-bold rounded-3xl text-xl bg-[#004aad] md:ml-80 md:-mt-20 mb-10 ">
                    ADMIN </p>
                </div>
              </div>
            </div>
          </div>
          <div class=" grid md:grid-cols-6 md:gap-6 gap-3 mt-3 mx-5">
            <div class=" mx-0  mt-3 justify-center md:col-span-2">
              <div
                class=" bg-white max-w-9xl md:max-w-full text-gray-900  row-span-3 row-start-1 mx-3 justify-center md:mx-0 row-end-3 rounded-3xl">
                <div class="flex flex-col shadow-md max-w-9xl rounded-3xl  h-full">
                  <div class="h-10 rounded-t-3xl mx-5 py-5 px-3 text-xl font-bold">Utilities</div>

                  <div class=" p-3 rounded-2xl m-2">

                    <a href="/newsfeed" class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                      <ion-ripple-effect></ion-ripple-effect>
                      <span class="p-2 bg-white rounded-md text-[#004aad]">
                        <Icon icon="fluent:feed-24-regular" class="w-10 h-10" />
                      </span>
                      <div class="text-left ml-2.5 overflow-hidden" title="supp.mikegester@gmail.com">
                        <p class="text-xl text-gray-800  font-semibold"> Newsfeed </p>
                        <p class="dark:text-gray-600"> Updates and notifications</p>
                      </div>
                    </a>

                    <a href="/" class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                      <ion-ripple-effect></ion-ripple-effect>
                      <span class="p-2 bg-white rounded-md text-[#004aad]">
                        <Icon icon="material-symbols:shopping-bag-outline" class="w-10 h-10" />
                      </span>
                      <div class="text-left ml-2.5">
                        <p class="text-xl text-gray-800  font-semibold"> Products </p>
                        <p class="dark:text-gray-600"> Supplements, food and merch</p>
                      </div>
                    </a>

                   
                  </div>
                </div>
              </div>
            </div>
            <div class=" mx-0  mt-3 justify-center md:col-span-2">
              <div
                class=" bg-white max-w-9xl md:max-w-full text-gray-900  row-span-3 row-start-1 mx-3 justify-center md:mx-0 row-end-3 rounded-3xl">
                <div class="flex flex-col shadow-md max-w-9xl rounded-3xl  h-full">
                  <div class="h-10 rounded-t-3xl mx-5 py-5 px-3 text-xl font-bold">Social Links</div>

                  <div class=" p-3 rounded-2xl m-2">

                    <a href="https://m.facebook.com/TheGymStreet" class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                      <ion-ripple-effect></ion-ripple-effect>
                      <span class="p-2 bg-white rounded-md text-[#004aad]">
                        <Icon icon="ant-design:facebook-outlined" class="w-10 h-10" />
                      </span>
                      <div class="text-left ml-2.5 overflow-hidden" title="supp.mikegester@gmail.com">
                        <p class="text-xl text-gray-800  font-semibold"> Facebook Page </p>
                        <p class="dark:text-gray-600"> The Gym Street</p>
                      </div>
                    </a>

                   <!-- <a href="https://m.me/r.mikegester" class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                      <ion-ripple-effect></ion-ripple-effect>
                      <span class="p-2 bg-white rounded-md text-[#004aad]">
                        <Icon icon="basil:facebook-messenger-outline" class="w-10 h-10" />
                      </span>
                      <div class="text-left ml-2.5">
                        <p class="text-xl text-gray-800  font-semibold"> Messenger </p>
                        <p class="dark:text-gray-600"> The Gym Street</p>
                      </div>
                    </a>-->

                    <a href="tel:09357456767" class="flex  border-gray-200 dark:border-gray-700 py-2.5  ion-activatable ripple-parent rectangle">
                      <ion-ripple-effect></ion-ripple-effect>
                      <span class="p-2 bg-white rounded-md text-[#004aad]">
                        <Icon icon="heroicons-outline:phone" class="w-10 h-10" />
                      </span>
                      <div class="text-left ml-2.5">
                        <p class="text-xl text-gray-800  font-semibold"> Phone Number </p>
                        <p class="dark:text-gray-600">0935 745 6767</p>
                      </div>
                    </a>



                  </div>
                </div>
              </div>
            </div>
            <div class=" mx-0  my-3 justify-center md:col-span-2">
              <div
                class=" bg-white max-w-9xl text-gray-900 col-span-3 md:col-span-2 row-span-3 row-start-1 mx-3 justify-center md:mx-0 row-end-3 rounded-3xl">
                <div class="flex flex-col shadow-md max-w-9xl rounded-3xl  h-full">
                  <div class="h-10 rounded-t-3xl mx-5 py-5 px-3 text-xl font-bold">More</div>


                  <div class=" p-3 rounded-2xl m-2 ">
                   <!-- <a  class="flex py-2.5  ion-activatable ripple-parent rectangle" disabled>
                      <ion-ripple-effect></ion-ripple-effect>
                      <span class="p-2 bg-white rounded-md  text-[#004aad]">
                        <Icon icon="fluent-mdl2:edit-contact" class="w-10 h-10" />
                      </span>
                      <div class="text-left ml-2">
                        <p class="text-xl text-gray-800  font-semibold ">Personalization</p>
                        <p class="dark:text-gray-600"> Edit profile information</p>
                      </div>
                    </a>-->

                    <a class="flex py-2.5  ion-activatable ripple-parent rectangle" disabled>
                      <ion-ripple-effect></ion-ripple-effect>
                      <span class="p-2 bg-white rounded-md  text-[#004aad]">
                        <Icon icon="grommet-icons:map-location" class="w-10 h-10" />
                      </span>
                      <div class="text-left ml-2 w-full">
                        <p class="text-xl text-gray-800  font-semibold">Location</p>
                        <p class="dark:text-gray-600"> View graphical location</p>
                      </div>
                    </a>

                    <a href="/login" class="flex py-2.5 ion-activatable ripple-parent rectangle">
                      <ion-ripple-effect></ion-ripple-effect>
                      <span class="p-2 bg-white rounded-md  text-[#004aad]">
                        <Icon icon="majesticons:door-exit-line" class="w-10 h-10" />
                      </span>
                      <div class="text-left ml-2">
                        <p class="text-xl text-gray-800   font-semibold">Exit</p>
                        <p class="dark:text-gray-600"> Logout your account</p>
                      </div>
                    </a>
                  
                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mx-auto">

          </div>

        </div>


      </div>

    </ion-content>

  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonToolbar, IonHeader, IonTitle, IonRippleEffect  } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
import { createOutline, settingsOutline, exitOutline } from 'ionicons/icons';
export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    Icon,
    IonHeader,
    IonTitle,
    IonRippleEffect


  },

  setup() {
    return { createOutline, settingsOutline, exitOutline };
  }
});
</script>
<style scoped>
 .ripple-parent {
    position: relative;
    overflow: hidden;

    border: 1px solid transparent;
    border-radius: 10px;
    margin:1px;
  }

  .rectangle {
    width: 300px;
    height: auto;
  }
</style>