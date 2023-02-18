<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Members</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-segment value="Members">
        <ion-segment-button value="Clients">
          <ion-label>Clients</ion-label>
        </ion-segment-button>
        <ion-segment-button value="Coaches">
          <ion-label>Coaches</ion-label>
        </ion-segment-button>
        <ion-segment-button value="Admins">
          <ion-label>Admins</ion-label>
        </ion-segment-button>
      </ion-segment>

      <ion-list>
        <ion-item>Boss Da</ion-item>
        <ion-item>Master 1</ion-item>
        <ion-item>Master 2</ion-item>
        <ion-item>Master 3</ion-item>
        <ion-item>Master 4</ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonSegment, IonSegmentButton } from '@ionic/vue';
//import ExploreContainer from '@/components/ExploreContainer.vue';
import { people, heart, pin } from 'ionicons/icons';
export default {
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonList,
    IonSegment,
    IonSegmentButton,
    // ExploreContainer
  },
  setup() {
    return { people, heart, pin };
  }
}
</script>
