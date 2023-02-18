<template>
  <ion-page>e
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="gridOutline" />
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="peopleOutline" />
          <ion-label>Members</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="personOutline" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>

    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { peopleOutline, personOutline, gridOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    IonIcon,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return { peopleOutline, personOutline, gridOutline };
  }
});
</script>
