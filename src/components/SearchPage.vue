<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>Settings</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            <div class="min-h-full p-5">
                <div class="bg-white h-64 my-5 animate-pulse rounded-3xl"></div>
                <div class="bg-white h-64 my-5 animate-pulse rounded-3xl"></div>
                <div class="bg-white h-64 my-5 animate-pulse rounded-3xl"></div>
                <div class="bg-white h-64 my-5 animate-pulse rounded-3xl"></div>
                <div class="bg-white h-64 my-5 animate-pulse rounded-3xl"></div>
            </div>

        </ion-content>
    </ion-page>
</template>
  
<script>
import { IonPage, IonHeader, IonToolbar, IonContent, IonBackButton, IonButtons, IonTitle } from '@ionic/vue';
import { defineComponent } from 'vue';
import { createOutline, settingsOutline } from 'ionicons/icons';

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
    }
});
</script>
  