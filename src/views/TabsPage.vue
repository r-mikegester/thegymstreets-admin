<template>
  <ion-page id="main-content">
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Dashboard" href="/tabs/Dashboard">
          <ion-icon :icon="gridOutline" />
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Workouts" href="/tabs/Workouts">
          <ion-icon :icon="imagesOutline" />
          <ion-label>Workouts</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Members" href="/tabs/Members">
          <ion-icon :icon="peopleOutline" />
          <ion-label>Members</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Profile" href="/tabs/Profile">
          <ion-icon :icon="personOutline" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, } from '@ionic/vue';

import { gridOutline, imagesOutline, peopleOutline, personOutline } from 'ionicons/icons';

export default {
  components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
  data() {
    return {
      gridOutline,
      imagesOutline,
      peopleOutline,
      personOutline,
    };
  },
};
</script>