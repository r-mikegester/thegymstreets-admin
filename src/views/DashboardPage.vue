<template>
  <ion-page id="main-content">

    <ion-content :fullscreen="true">
      <div class="bg-[#004aad] w-full h-96 fixed -z-10 rounded-b-3xl ">
        <ion-menu-toggle>
          <ion-button fill="none" class="ml-5 mt-10">
            <Icon icon="charm:menu-hamburger" class="w-14 h-14 text-white z-50" />
          </ion-button>
        </ion-menu-toggle>
        <h3 class="text-white ml-10 mt-4">Good Day!</h3>
      </div>

      <div class=" bg-gray-100 rounded-t-3xl my-96 bg-fixed min-h-full">
        <div class="p-5">
          <div class="grid grid-cols-1 p-1 gap-4 my-auto">

            <div class="bg-white shadow-md rounded-3xl -mt-40 h-64 w-full">
              <div class="grid grid-cols-3 h-full w-full p-10 z-50">
                <span class=" h-full w-full p-5">
                  <div class="rounded-full w-20 h-20 mx-auto pt-5 bg-[#004aad]">
                    <Icon icon="carbon:notification-new" class="w-10 h-10 mx-auto" />
                  </div>
                  <h3 class="text-center text-gray-900 mt-1">69</h3>
                  <p class="text-center text-gray-900 -mt-2">New!</p>
                </span>
                <span class="h-full w-full ">
                  <div
                    class="rounded-full w-40 h-40 border-t-yellow-500 border-b-yellow-500 border-l-transparent border-r-yellow-500 border-8  rotate-45 mt-5 ">
                  </div>
                  <div class="bg-white shadow-sm p-5 rounded-full -mt-36 ml-5">
                    <h3 class="text-center text-gray-900">100+</h3>
                    <p class="text-center -mt-2 text-gray-900">Daily</p>
                  </div>
                </span>
                <span class=" h-full w-full p-5 ml-5">
                  <div class="rounded-full w-20 h-20 mx-auto pt-5 bg-[#004aad]">
                    <Icon icon="fluent:people-checkmark-24-regular" class="w-10 h-10 mx-auto" />
                  </div>
                  <h3 class="text-center text-gray-900 mt-1">420</h3>
                  <p class="text-center text-gray-900 -mt-2">Members</p>
                </span>
              </div>
            </div>


          </div>
          <h3 class="text-gray-900">Stats</h3>
          <section class=" my-6 ">
            <div class="container grid grid-cols-2 gap-4 mx-auto  xl:grid-cols-4">
              <div class="flex p-4 space-x-4 rounded-2xl md:space-x-6 dark:bg-white shadow-md dark:text-gray-900">
                <div class="flex justify-center p-2 align-middle rounded-xl sm:p-4 dark:bg-[#004aad]">
                  <Icon icon="ic:baseline-card-membership" class="w-10 h-10 text-white" />
                </div>
                <div class="flex flex-col justify-center align-middle">
                  <p class="text-3xl font-semibold leading-none">20</p>
                  <p class="capitalize">New Clients</p>
                </div>
              </div>
              <div class="flex p-4 space-x-4 rounded-2xl md:space-x-6 dark:bg-white shadow-md dark:text-gray-900">
                <div class="flex justify-center p-2 align-middle rounded-xl sm:p-4 dark:bg-[#004aad]">
                  <Icon icon="icomoon-free:happy" class="w-10 h-10 text-white" />
                </div>
                <div class="flex flex-col justify-center align-middle">
                  <p class="text-3xl font-semibold leading-none">27</p>
                  <p class="capitalize">Satisfied Clients</p>
                </div>
              </div>
              <div class="flex p-4 space-x-4 rounded-2xl md:space-x-6 dark:bg-white shadow-md dark:text-gray-900">
                <div class="flex justify-center p-2 align-middle rounded-xl sm:p-4 dark:bg-[#004aad]">
                  <Icon icon="la:users" class="w-10 h-10 text-white" />
                </div>
                <div class="flex flex-col justify-center align-middle">
                  <p class="text-3xl font-semibold leading-none">69%</p>
                  <p class="capitalize">Membership</p>
                </div>
              </div>
              <div class="flex p-4 space-x-4 rounded-2xl md:space-x-6 dark:bg-white shadow-md dark:text-gray-900">
                <div class="flex justify-center p-2 align-middle rounded-xl sm:p-4 dark:bg-[#004aad]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
                    class="h-9 w-9 dark:text-white">
                    <path
                      d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z">
                    </path>
                  </svg>
                </div>
                <div class="flex flex-col justify-center align-middle">
                  <p class="text-3xl font-semibold leading-none">17%</p>
                  <p class="capitalize">annual rate</p>
                </div>
              </div>
            </div>
          </section>
          <div class="">
            <div class="flex">
              <h3 class="text-gray-900">Subscriptions</h3>
            </div>
            <div class=" grid grid-cols-1 gap-4 ">

              <div class="bg-white shadow-md rounded-3xl p-1  h-full w-full">
                <div class="container p-2 mx-auto  dark:text-gray-100">

                  <div class="overflow-x-auto">
                    <table class="min-w-full text-md">
                      <colgroup>

                        <col>
                        <col>
                        <col>
                        <col>
                        <col class="w-24">
                      </colgroup>
                      <thead class="dark:bg-white text-gray-900 text-md">
                        <tr class="text-left">

                          <th class="p-3">Client</th>
                          <th class="p-3">Issued</th>
                          <th class="p-3">Due</th>
                          <th class="p-3 text-right">Amount</th>
                          <th class="p-3">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b border-opacity-100  bg-white text-gray-900">

                          <td class="p-3">
                            <p>Abigael Julia Adrao</p>
                          </td>
                          <td class="p-3">
                            <p>14 Jan 2022</p>
                            <p class="dark:text-[#004aad]">Friday</p>
                          </td>
                          <td class="p-3">
                            <p>01 Feb 2022</p>
                            <p class="dark:text-[#004aad]">Tuesday</p>
                          </td>
                          <td class="p-3 text-right">
                            <p>1000</p>
                          </td>
                          <td class="p-3 text-right">
                            <span class="px-3 py-1 font-semibold rounded-md dark:bg-emerald-500 dark:text-gray-900">
                              <span class="text-white">Success</span>
                            </span>
                          </td>
                        </tr>
                        <tr class="border-b border-opacity-20  dark:bg-white text-gray-900">

                          <td class="p-3">
                            <p>Tesla Inc.</p>
                          </td>
                          <td class="p-3">
                            <p>14 Jan 2022</p>
                            <p class="dark:text-[#004aad]">Friday</p>
                          </td>
                          <td class="p-3">
                            <p>01 Feb 2022</p>
                            <p class="dark:text-[#004aad]">Tuesday</p>
                          </td>
                          <td class="p-3 text-right">
                            <p>$275</p>
                          </td>
                          <td class="p-3 text-right">
                            <span class="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                              <span>Pending</span>
                            </span>
                          </td>
                        </tr>
                        <tr class="border-b border-opacity-20  dark:bg-white text-gray-900">

                          <td class="p-3">
                            <p>Coca Cola co.</p>
                          </td>
                          <td class="p-3">
                            <p>14 Jan 2022</p>
                            <p class="dark:text-[#004aad]">Friday</p>
                          </td>
                          <td class="p-3">
                            <p>01 Feb 2022</p>
                            <p class="dark:text-[#004aad]">Tuesday</p>
                          </td>
                          <td class="p-3 text-right">
                            <p>$8,950,500</p>
                          </td>
                          <td class="p-3 text-right">
                            <span class="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                              <span>Pending</span>
                            </span>
                          </td>
                        </tr>
                        <tr class="border-b border-opacity-100  dark:bg-white text-gray-900">

                          <td class="p-3">
                            <p>Nvidia Corporation</p>
                          </td>
                          <td class="p-3">
                            <p>14 Jan 2022</p>
                            <p class="dark:text-[#004aad]">Friday</p>
                          </td>
                          <td class="p-3">
                            <p>01 Feb 2022</p>
                            <p class="dark:text-[#004aad]">Tuesday</p>
                          </td>
                          <td class="p-3 text-right">
                            <p>$98,218</p>
                          </td>
                          <td class="p-3 text-right">
                            <span class="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                              <span>Pending</span>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

            </div>
            <h3 class="text-gray-900">Workout Goals </h3>
            <div class="grid grid-cols-4 my-5 p-1 gap-4">
              <div
                class="bg-white shadow-md text-center my-auto animate-pulse rounded-3xl h-64 row-span-1 col-span-2 md:col-span-1">
                Chest
                Muscle Group
              </div>
              <div
                class="bg-white shadow-md text-center my-auto animate-pulse rounded-3xl h-64 row-span-1 col-span-2 md:col-span-1">
                Abs
                Muscle Group
              </div>
              <div
                class="bg-white shadow-md text-center my-auto animate-pulse rounded-3xl h-64 row-span-1 col-span-2 md:col-span-1">
                Quad
                Muscle Group
              </div>
              <div
                class="bg-white shadow-md text-center my-auto animate-pulse rounded-3xl h-64 row-span-1 col-span-2 md:col-span-1">
                Back
                Muscle Group
              </div>

              <button class="bg-sky-700 rounded-2xl h-16 col-span-4 text-center">
                <h4 class="justify-center my-auto">View All</h4>
              </button>
            </div>


          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { Icon } from '@iconify/vue';
import { IonPage, IonContent, IonMenuToggle, IonButton, } from '@ionic/vue';
import { defineComponent } from 'vue';
import { star } from 'ionicons/icons';
export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonMenuToggle,
    Icon,
    IonButton,

  },

  setup() {
    return { star };
  }

});


</script>

<style scoped>
ion-title {
  margin: 10px;
  font-size: 25px;
}

ion-menu::part(container) {
  border-radius: 0 10px 10px 0;

  box-shadow: 4px 0px 16px rgba(0, 81, 255, 0.4);
}

ion-menu-toggle {
  --background: transparent;
}
</style>