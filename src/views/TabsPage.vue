<template>
  <ion-page id="main-content" class="bg-gray-100 md:bg-[#004aad]">
    <ion-tabs class="bg-transparent rounded-t-3xl">
      <ion-router-outlet class="bg-transparent"></ion-router-outlet>
 
      <ion-tab-bar slot="bottom" class=" md:mx-5 md:mb-0 rounded-t-3xl">
        <ion-tab-button tab="Dashboard" href="/tabs/Dashboard">
          <ion-icon :icon="barChartOutline" class="w-8 h-8" />

        </ion-tab-button>

        <ion-tab-button tab="Workouts" href="/tabs/Workouts">
          <ion-icon :icon="albumsOutline" class="w-8 h-8" />

        </ion-tab-button>

        <ion-tab-button tab="Members" href="/tabs/Members">
          <ion-icon :icon="peopleOutline" class="w-8 h-8" />

        </ion-tab-button>

        <ion-tab-button tab="Profile" href="/tabs/Profile">
          <ion-icon :icon="personOutline" class="w-8 h-8" />
       
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>    
  </ion-page>
</template>

<script>
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, } from '@ionic/vue';
import { barChartOutline, albumsOutline, peopleOutline, personOutline } from 'ionicons/icons';

export default {
  components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, },
  data() {
    return {
      barChartOutline,
      albumsOutline,
      peopleOutline,
      personOutline,
      
    };
  },
};
</script>