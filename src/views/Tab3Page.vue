<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="createOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="settingsOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>


          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>

        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-thumbnail slot="start">
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                  style="border-radius: 100%;" />exit
              </ion-thumbnail>
              <ion-label>ADMIN</ion-label>
            </ion-item>

          </ion-list>

        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, } from '@ionic/vue';
import { defineComponent } from 'vue';
import { createOutline, settingsOutline } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonCard,
    IonCardContent,
    // IonCardHeader,
    //  IonCardSubtitle,
    //  IonCardTitle,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent

  },
  setup() {
    return { createOutline, settingsOutline };
  }
});
</script>
