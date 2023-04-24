<template>
  <ion-page>
    <ion-header class="bg-[#004aad]">
      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button>
            <Icon icon="solar:add-circle-broken" class="w-20 h-20" slot="icon-only" />
          </ion-button>
        </ion-buttons>
        <ion-title>Workouts Library</ion-title>
        
      </ion-toolbar><ion-searchbar animated="true" placeholder="Search" mode="ios"  class=" mx-auto h-16 text-white md:w-2/4 bg-[#004aad]"></ion-searchbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="max-w-screen-xl p-5 mx-auto">
        <ion-list lines="none">
          <ion-item class="text-gray-900" v-for="(workout, index) in workouts" :key="index">
            <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="../assets/imgs/thumbnail.svg" />
        </ion-thumbnail>
            <ion-label>
              <h2>{{ workout.title }}</h2>
              <p>{{ workout.description }}</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonSearchbar, IonItem, IonList, IonLabel, IonThumbnail,  } from '@ionic/vue';
import { defineComponent } from 'vue';
import { createOutline } from 'ionicons/icons';
import { Icon } from '@iconify/vue';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css/free-mode';
import backend from '../config/axios';

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonButtons,
    IonButton,
    Icon,
    IonItem,
    IonList,
    IonLabel, IonThumbnail, 
  },
  setup() {
    return {
      createOutline,
      modules: [FreeMode, Pagination],
    };
  },
  data() {
    return {
      workouts: [],
    };
  },
  async mounted() {
    try {
      const response = await backend.get('/v1/admin/workout-library');
      this.workouts = response.data.data;
    } catch (error) {
      
      console.error(error);
    }
  },
});
</script>
