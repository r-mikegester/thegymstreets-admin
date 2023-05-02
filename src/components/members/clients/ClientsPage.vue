<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/tabs/Members"></ion-back-button>
                </ion-buttons>
                <ion-title><!--Name of Client--></ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            <div class="min-h-full p-5">
               <div> CLIENTS VIEW</div>
            </div>

        </ion-content>
    </ion-page>
</template>
  
<script>
import { IonPage, IonHeader, IonToolbar, IonContent, IonBackButton, IonButtons, IonTitle } from '@ionic/vue';
import { defineComponent } from 'vue';
import { createOutline, settingsOutline } from 'ionicons/icons';
import backend from '../../../config/axios';
export default defineComponent({
    components: {
        // IonCardHeader,
        //  IonCardSubtitle,
        //  IonCardTitle,
        IonPage,
        IonHeader,
        IonToolbar,
        IonContent,
        IonBackButton,
        IonButtons,
        IonTitle

    },
    setup() {
        return { createOutline, settingsOutline };
    },
    data() {
    return {
      clients: [],
    };
  },
  async mounted() {
    const clientsResult = await backend.get('/v1/admin/clients')
    this.clients = clientsResult.data.data
  },
});
</script>
  