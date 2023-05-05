<template>
  <ion-page id="main-content">
    <ion-toolbar>

      <ion-title>Dashboard</ion-title>
    </ion-toolbar>
    <ion-content class="min-h-fit">
      <div class="bg-[#004aad] w-full md:w-4/4 md:h-full h-72 fixed md:p-5 -z-50 rounded-b-3xl md:flex">
        <Charts class="col-span-6 h-full m-5 md:w-full mx-5 md:rounded-3xl  text-[#004aad]"></Charts>
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-6 md:col-span-2 gap-4 hidden md:block">
            <div class="bg-white shadow-md rounded-3xl -mt-32 md:mt-10 h-80 mx-auto max-w-full">
              <div class="grid grid-cols-6 h-full w-full z-50">
                <div
                  class=" bg-white max-w-9xl text-gray-700 col-span-6 md:col-span-6 justify-center md:mx-0  rounded-3xl">
                  <div class="flex flex-col max-w-9xl rounded-3xl  h-full">
                    <div class="h-10 rounded-t-3xl mx-3 py-5 px-3 text-xl flex ">
                      <h3 class="w-full -mt-2 text-2xl font-bold text-gray-900">Status</h3>
                      <a href="/tabs/Members" class="text-sm -ml-16 font-semibold">View All</a>
                    </div>


                    <div class=" rounded-2xl mx-5 my-5">
                      <div class="flex  border-gray-200  py-2.5">
                        <span class="p-2 bg-white rounded-md text-[#004aad]">
                          <Icon icon="fa6-solid:people-group" class="w-10 h-10" />
                        </span>

                        <div class="text-left ml-2.5 overflow-hidden">
                          <p class="text-xl text-gray-700 font-semibold"> Total Clients </p>
                          <ion-badge slot="end" color="success" class="text-white">{{ clientsCount }}</ion-badge>
                        </div>
                      </div>

                      <div class="flex  border-gray-200  py-2.5">
                        <span class="p-2 bg-white rounded-md text-[#004aad]">
                          <Icon icon="fa6-solid:users-rectangle" class="w-10 h-10" />
                        </span>
                        <div class="text-left ml-2.5">
                          <p class="text-xl text-gray-700 font-semibold">Total Coaches</p>
                          <ion-badge slot="end" color="danger">{{ coachesCount }}</ion-badge>
                        </div>
                      </div>

                      <div class="flex  border-gray-200  py-2.5">
                        <span class="p-2 bg-white rounded-md text-[#004aad]">
                          <Icon icon="eos-icons:admin-outlined" class="w-10 h-10" />
                        </span>
                        <div class="text-left ml-2.5">
                          <p class="text-xl text-gray-700 font-semibold ">Total Available Admin</p>
                          <ion-badge slot="end" color="primary">{{ adminsCount }}</ion-badge>
                        </div>
                      </div>




                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-6 md:col-span-2 gap-4 hidden md:block">
            <div class="bg-white shadow-md rounded-3xl -mt-32 md:-mt-52  h-40 mx-auto max-w-full">
              <div class="grid grid-cols-6 h-full w-full z-50">
                <div
                  class=" bg-white max-w-9xl text-gray-700 col-span-6 md:col-span-6 justify-center md:mx-0  rounded-3xl">
                  <div class="flex flex-col max-w-9xl rounded-3xl  h-full">
                    <div class="h-10 rounded-t-3xl mx-3 py-5 px-3 text-xl flex ">
                      <h3 class="w-full -mt-2 text-2xl font-bold text-gray-900">Subscriptions</h3>

                    </div>

                    <div class=" rounded-2xl mx-5 my-5">
                      <div class="flex  border-gray-200  py-2.5">
                        <span class="p-2 bg-white rounded-md text-[#004aad]">
                          <Icon icon="mdi:users-check" class="w-10 h-10" />
                        </span>
                        <div class="text-left ml-2.5">
                          <p class="text-xl text-gray-700 font-semibold ">with Coaches</p>
                          <ion-badge slot="end" color="primary">{{ coachingsCount }}</ion-badge>
                        </div>
                      </div>

                      <div class="flex  border-gray-200  py-2.5">
                        <span class="p-2 bg-white rounded-md text-[#004aad]">
                          <Icon icon="bx:badge-check" class="w-10 h-10" />
                        </span>
                        <div class="text-left ml-2.5">
                          <p class="text-xl text-gray-700 font-semibold ">Memberships</p>
                          <ion-badge slot="end" color="primary">{{   subscriptionsCount }}</ion-badge>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-100 rounded-t-3xl mt-96 md:my-0 mb-6 md:mt-96 bg-fixed md:hidden">
        <div class="p-5 pb-36 h-full">
          <div class="grid grid-cols-6 gap-4 md:gap-6">
            <div class="col-span-6 md:col-span-3 gap-4 md:hidden">
              <div class="bg-white shadow-md rounded-3xl -mt-20 md:mt-10 h-80 mx-auto max-w-full">
                <div class="grid grid-cols-6 h-full w-full z-50">
                  <div
                    class=" bg-white max-w-9xl text-gray-700 col-span-6 md:col-span-6 justify-center md:mx-0  rounded-3xl">
                    <div class="flex flex-col max-w-9xl rounded-3xl  h-full">
                      <div class="h-10 rounded-t-3xl mx-3 py-5 px-3 text-xl flex ">
                        <h3 class="w-full -mt-2 text-2xl font-bold text-gray-900">Status</h3>
                        <a href="/tabs/Members" class="text-sm -ml-16 font-semibold">View All</a>
                      </div>


                      <div class=" rounded-2xl mx-5 my-5">
                        <div class="flex  border-gray-200  py-2.5">
                          <span class="p-2 bg-white rounded-md text-[#004aad]">
                            <Icon icon="fa6-solid:people-group" class="w-10 h-10" />
                          </span>
                          <div class="text-left ml-2.5 overflow-hidden">
                            <p class="text-xl text-gray-700 font-semibold"> Total Clients </p>
                            <ion-badge slot="end" color="success" class="text-white">{{ clientsCount }}</ion-badge>
                          </div>
                        </div>

                        <div class="flex  border-gray-200  py-2.5">
                          <span class="p-2 bg-white rounded-md text-[#004aad]">
                            <Icon icon="fa6-solid:users-rectangle" class="w-10 h-10" />
                          </span>
                          <div class="text-left ml-2.5">
                            <p class="text-xl text-gray-700 font-semibold">Total Coaches</p>
                            <ion-badge slot="end" color="danger">{{ coachesCount }}</ion-badge>
                          </div>
                        </div>

                        <div class="flex  border-gray-200  py-2.5">
                          <span class="p-2 bg-white rounded-md text-[#004aad]">
                            <Icon icon="eos-icons:admin-outlined" class="w-10 h-10" />
                          </span>
                          <div class="text-left ml-2.5">
                            <p class="text-xl text-gray-700 font-semibold ">Total Available Admin</p>
                            <ion-badge slot="end" color="primary">{{ adminsCount }}</ion-badge>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-6 md:col-span-2 gap-4 md:hidden">
            <div class="bg-white shadow-md rounded-3xl my-5 md:-mt-52  h-40 mx-auto max-w-full">
              <div class="grid grid-cols-6 h-full w-full z-50">
                <div
                  class=" bg-white max-w-9xl text-gray-700 col-span-6 md:col-span-6 justify-center md:mx-0  rounded-3xl">
                  <div class="flex flex-col max-w-9xl rounded-3xl  h-full">
                    <div class="h-10 rounded-t-3xl mx-3 py-5 px-3 text-xl flex ">
                      <h3 class="w-full -mt-2 text-2xl font-bold text-gray-900">Subscriptions</h3>

                    </div>

                    <div class=" rounded-2xl mx-5 my-5">
                      <div class="flex  border-gray-200  py-2.5">
                        <span class="p-2 bg-white rounded-md text-[#004aad]">
                          <Icon icon="mdi:users-check" class="w-10 h-10" />
                        </span>
                        <div class="text-left ml-2.5">
                          <p class="text-xl text-gray-700 font-semibold ">with Coaches</p>
                          <ion-badge slot="end" color="primary">{{ coachingsCount }}</ion-badge>
                        </div>
                      </div>

                      <div class="flex  border-gray-200  py-2.5">
                        <span class="p-2 bg-white rounded-md text-[#004aad]">
                          <Icon icon="bx:badge-check" class="w-10 h-10" />
                        </span>
                        <div class="text-left ml-2.5">
                          <p class="text-xl text-gray-700 font-semibold ">Memberships</p>
                          <ion-badge slot="end" color="primary">{{ subscriptionsCount }}</ion-badge>
                        </div>
                      </div>

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
import {
  IonPage,
  IonContent,
  IonTitle,
  IonToolbar,

  IonBadge


} from "@ionic/vue";
import { defineComponent } from "vue";
//import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Icon } from '@iconify/vue';
import backend from '../config/axios'

import {
  star,
  gridOutline,
  exitOutline,
  settingsOutline,
  notificationsOutline,
  createOutline,
  newspaperOutline,
  bagHandleOutline,
  sparklesOutline,
  helpOutline,
  barChartOutline,
  albumsOutline,
  peopleOutline,
  personOutline,
} from "ionicons/icons";
import Charts from "../components/ChartsJS.vue";
export default defineComponent({
  components: {
    IonPage,
    IonContent,
    Icon,
    IonTitle,
    IonToolbar,
    Charts,
 
    IonBadge
  },

  setup() {
    return {
      star,
      gridOutline,
      exitOutline,
      settingsOutline,
      notificationsOutline,
      createOutline,
      newspaperOutline,
      bagHandleOutline,
      sparklesOutline,
      helpOutline,
      barChartOutline,
      albumsOutline,
      peopleOutline,
      personOutline,
      modules: [Pagination],
      clients: [],
      coaches: [],
      admins: [],
    };
  },


  async mounted() {

    const result = await backend.get('/v1/admin/analytics')

    this.clientsCount = result.data.clients
    this.coachesCount = result.data.coaches
    this.adminsCount = result.data.admin
    this.coachingsCount = result.data.coaching
    this.subscriptionsCount = result.data.subscriptions
  },

  data() {
    return {
      client: [
        { id: 1, name: 'Item 1', },

      ],
      clientsCount: 0,
      coachesCount: 0,
      adminsCount: 0,
      coachingsCount: 0,
      subscriptionsCount: 0
    };
  },
});

</script>

<style scoped>
ion-modal {
  --border-radius: 20px;
}
</style>
