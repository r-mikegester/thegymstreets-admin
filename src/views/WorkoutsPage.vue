<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button>
            <Icon slot="icon-only" class="w-20 h-20" icon="solar:widget-add-broken" />
          </ion-button>
        </ion-buttons>
        <ion-title>Workouts Library</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="max-w-screen-xl p-5 mx-auto  ">
        <h2 class="text-gray-600 font-bold">Major Muscle Groups</h2>

        <div class="grid grid-cols-6 gap-3 lg:grid-cols-4 sm:grid-cols-2">
          <div class="col-span-6 md:col-span-2  rounded-xl">
              <swiper 
              :spaceBetween="5" 
              :slidesPerView="3" 
              :grabCursor="true" 
              :freeMode="true" 
              :pagination="{
                dynamicBullets: true,
                clickable: true,
              }"
              :modules="modules" class="mySwiper  h-16 rounded-xl">
                <swiper-slide class="bg-gradient-to-r from-red-400 to-red-700 text-center w-full h-10 rounded-xl text-gray-900 border-2 shadow-md">
                 <h3 class="text-white font-extrabold text-xs mt-5">PECS</h3>
                </swiper-slide>
                <swiper-slide class="bg-gradient-to-r from-orange-400 to-orange-700 text-center w-full h-10  rounded-xl text-gray-900 border-2  shadow-md">
                <h3 class="text-white font-extrabold text-xs mt-5">HAMS & CALVES</h3>
                </swiper-slide>
                <swiper-slide class="bg-gradient-to-r from-emerald-400 to-emerald-700 text-center w-full h-10  rounded-xl text-gray-900 border-2  shadow-md">
                <h3 class="text-white font-extrabold text-xs mt-5">ARMS</h3>
                </swiper-slide>
                <swiper-slide class="bg-gradient-to-r from-yellow-400 to-yellow-700 text-center w-full h-10  rounded-xl text-gray-900 border-2  shadow-md">
                <h3 class="text-white font-extrabold text-xs mt-5">ABS & OBLIQUE</h3>
                </swiper-slide>
                <swiper-slide class="bg-gradient-to-r from-blue-400 to-blue-700 text-center w-full h-10  rounded-xl text-gray-900 border-2  shadow-md">
                <h3 class="text-white font-extrabold text-xs mt-5">TRAPS & LATS</h3>
              </swiper-slide>
              <swiper-slide class="bg-gradient-to-r from-pink-500 to-violet-500 text-center w-full h-10  rounded-xl text-gray-900 border-2 shadow-md">
                <h3 class="text-white font-extrabold text-xs mt-5">SHOULDERS</h3>
              </swiper-slide>
              </swiper>

            </div>
 

        </div>
        <h2 class="text-gray-600 py-5 font-bold ">All Workouts</h2>
        <ion-searchbar animated="true" placeholder="Specific Workout" mode="ios"
          class="border-2 mx-auto rounded-xl h-10 text-gray-900 border-gray-200 bg-white shadow-md mb-3"></ion-searchbar>
        <div class="grid grid-cols-2 gap-3 lg:grid-cols-4 sm:grid-cols-2">
          <div class="bg-white shadow-md rounded-3xl col-span-1 h-28">
            <img src="../assets/imgs/workouts/dips.gif" class="h-28 mx-auto" />
          </div>

          <div class="bg-white shadow-md rounded-3xl col-span-1 h-28">
            <img src="../assets/imgs/workouts/arm-raise.gif" class="h-28 mx-auto" />
          </div>

          <div class="bg-white shadow-md rounded-3xl col-span-1 h-28">
            <img src="../assets/imgs/workouts/trapsandlats.gif" class="h-28 mx-auto" />
          </div>

          <div class="bg-white shadow-md rounded-3xl col-span-1 h-28">
            <img src="../assets/imgs/workouts/lats.gif" class="h-28 mx-auto" />
          </div>

          <div class="bg-white shadow-md rounded-3xl col-span-1 h-28">
            <img src="../assets/imgs/workouts/hams.gif" class="h-28 mx-auto" />
          </div>

          <div class="bg-white shadow-md rounded-3xl col-span-1 h-28">
            <img src="../assets/imgs/workouts/pushups.gif" class="h-28 mx-auto" />
          </div>

          <div class="bg-white shadow-md rounded-3xl col-span-1 h-28">
            <img src="../assets/imgs/workouts/major.gif" class="h-28 mx-auto" />
          </div>

          <div class="bg-white shadow-md rounded-3xl col-span-1 h-28">
            <img src="../assets/imgs/workouts/traps.gif" class="h-28 mx-auto" />
          </div>

          <div class="bg-white shadow-md rounded-3xl col-span-1 h-28">
            <img src="../assets/imgs/workouts/arms.gif" class="h-28 mx-auto" />
          </div>
          <div class="bg-white shadow-md rounded-3xl col-span-1 h-28">
            <img src="../assets/imgs/workouts/legs.gif" class="h-28 mx-auto" />
          </div>
        </div>
      </div>





    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonSearchbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { createOutline } from 'ionicons/icons';
import { Icon } from '@iconify/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css/free-mode';
export default defineComponent({
  components: {

    // IonCardHeader,
    //  IonCardSubtitle,
    //  IonCardTitle,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonButtons,
    IonButton,
    Icon,
    Swiper,
    SwiperSlide,

  },
  setup() {
    return {
      createOutline,
      modules: [FreeMode, Pagination],

    };
  }
});
</script>
