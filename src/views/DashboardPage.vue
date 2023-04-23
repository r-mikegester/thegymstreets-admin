<template>
  <ion-page id="main-content">
    <ion-toolbar>
    
      <ion-title>Dashboard</ion-title>
    </ion-toolbar>
    <ion-content class="min-h-fit">
      <div class="bg-[#004aad] w-full h-64 md:h-64 fixed -z-50 rounded-b-3xl">
        <Charts class="col-span-6 h-full  mx-5 text-white"></Charts>
      </div>

      <div class="bg-gray-100 rounded-t-3xl mt-96 md:my-0 mb-6 md:mt-64 bg-fixed">
        <div class="p-5 pb-16 h-full">
          <div class="grid grid-cols-6 gap-4 md:gap-6">
            <div class="col-span-6">
              <div class="bg-white shadow-md rounded-3xl -mt-32 md:mt-10 h-80 mx-auto max-w-full">
                <div class="grid grid-cols-6 h-full w-full z-50">
               <div
                    class=" bg-white max-w-9xl text-gray-700 col-span-6 md:col-span-2 justify-center md:mx-0  rounded-3xl">
                    <div class="flex flex-col  max-w-9xl rounded-3xl  h-full">
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
                            <ion-badge slot="end" color="success" class="text-white">7</ion-badge>
                          </div>
                        </div>

                        <div class="flex  border-gray-200  py-2.5">
                          <span class="p-2 bg-white rounded-md text-[#004aad]">
                            <Icon icon="fa6-solid:users-rectangle" class="w-10 h-10" />
                          </span>
                          <div class="text-left ml-2.5">
                            <p class="text-xl text-gray-700 font-semibold">Total Coaches</p>
                            <ion-badge slot="end" color="danger">7</ion-badge>
                          </div>
                        </div>

                        <div class="flex  border-gray-200  py-2.5">
                          <span class="p-2 bg-white rounded-md text-[#004aad]">
                            <Icon icon="eos-icons:admin-outlined" class="w-10 h-10" />
                          </span>
                          <div class="text-left ml-2.5">
                            <p class="text-xl text-gray-700 font-semibold ">Total Available Admin</p>
                            <ion-badge slot="end" color="primary">1</ion-badge>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          
             <div class="col-span-6 md:col-span-2 row-span-2 rounded-xl">
              <swiper :spaceBetween="10" :slidesPerView="2" :grabCursor="true" :navigation="true" :pagination="{
                dynamicBullets: true,
                clickable: true,
              }" :modules="modules" class="mySwiper  h-20 rounded-xl">
                <swiper-slide class="bg-white shadow-md w-full h-36 rounded-xl text-gray-900">
                  <a href="/newsfeed" class=" rounded-2xl mx-5 ">
                    <div class="inline-flex  border-gray-200  py-2.5">
                      <span class="p-2 bg-white rounded-md text-[#004aad]">
                        <Icon icon="bx:badge-check"  class="w-10 h-10 -ml-3"/>
                      </span>
                      <div class="text-left ml-2 overflow-hidden">
                        <p class="text-sm text-gray-700 font-semibold "> Memberships</p>
                        <ion-badge slot="end" class="text-white text-sm">96</ion-badge>
                      </div>
                    </div>
                  </a>
                </swiper-slide>
                <swiper-slide class="bg-white shadow-md w-full h-36 rounded-xl text-gray-900">
                  <div class=" rounded-2xl mx-5 ">
                    <div class="inline-flex  border-gray-200  py-2.5">
                      <span class="p-2 bg-white rounded-md text-[#004aad]">
                        <Icon icon="mdi:users-check"  class="w-10 h-10 -ml-3"/>
                      </span>
                      <div class="text-left ml-2 overflow-hidden">
                        <p class="text-sm text-gray-700 font-semibold">With Coaches </p>
                        <ion-badge slot="end"  class="text-white text-sm">8</ion-badge>
                      </div>
                    </div>
                    </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="col-span-6 md:col-span-2 row-span-2 rounded-xl">
              <swiper :spaceBetween="10" :slidesPerView="2" :grabCursor="true" :navigation="true" :pagination="{
                dynamicBullets: true,
                clickable: true,
              }" :modules="modules" class="mySwiper  h-20 rounded-xl">
                <swiper-slide class="bg-white shadow-md w-full h-36 rounded-xl text-gray-900">
                  <a href="/newsfeed" class=" rounded-2xl mx-5 ">
                    <div class="inline-flex  border-gray-200  py-2.5">
                      <span class="p-2 bg-white rounded-md text-[#004aad]">
                        <Icon icon="fluent:feed-24-regular"  class="w-10 h-10 -ml-3"/>
                      </span>
                      <div class="text-left ml-2 overflow-hidden">
                        <p class="text-sm text-gray-700 font-semibold "> Newsfeed </p>
                        <ion-badge slot="end" class="text-white text-sm">New Posts</ion-badge>
                      </div>
                    </div>
                  </a>
                </swiper-slide>
                <swiper-slide class="bg-white shadow-md w-full h-36 rounded-xl text-gray-900">
                  <div class=" rounded-2xl mx-5 ">
                    <div class="inline-flex  border-gray-200  py-2.5">
                      <span class="p-2 bg-white rounded-md text-[#004aad]">
                        <Icon icon="material-symbols:shopping-bag-outline"    class="w-10 h-10 -ml-3"/>
                      </span>
                      <div class="text-left ml-2 overflow-hidden">
                        <p class="text-sm text-gray-700 font-semibold"> Products </p>
                        <ion-badge slot="end"  class="text-white text-sm">SALE!!!</ion-badge>
                      </div>
                    </div>
                    </div>
                </swiper-slide>
              </swiper>
            </div>

          
            <div class="col-span-6 md:col-span-2  rounded-xl">
             <p class="text-xs text-gray-300 text-center font-semibold">=== That's a wrap! ===</p>
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
import { Swiper, SwiperSlide } from 'swiper/vue';
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
    Swiper,
    SwiperSlide,
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
      clients:[],
      coaches: [],
      admins: [],
    };
  },

 
  async mounted() {
  
    const result = await backend.get('/v1/admin/analytics')
    const clientsTotal = await backend.get('/v1/admin/analytics')
    const coachesTotal = await backend.get('/v1/admin/analytics')
    const adminTotal = await backend.get('/v1/admin/analytics')
    console.log(result.data)

  this.clients = clientsTotal.data.clients
    this.coaches = coachesTotal.data.coaches
    this.admin = adminTotal.data.admin
    this.response = result.data
  },

  data() {
    return {
      client: [
        { id: 1, name: 'Item 1',  },
    
      ],
    };
  },
});

</script>

<style scoped>
ion-modal {
  --border-radius: 20px;
}
</style>
