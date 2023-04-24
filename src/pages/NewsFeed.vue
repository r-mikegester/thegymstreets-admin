<template>
    <ion-header>
      <ion-toolbar>
      
        <ion-title>Newsfeed</ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ion-content class="ion-padding">
      <p class="text-center text-gray-600">Pull to refresh</p>
      <div class="min-h-full ">
                <div class="bg-gray-200 h-64 my-5 animate-pulse rounded-3xl"></div>
                <div class="bg-gray-200 h-64 my-5 animate-pulse rounded-3xl"></div>
                <div class="bg-gray-200 h-64 my-5 animate-pulse rounded-3xl"></div>
                <div class="bg-gray-200 h-64 my-5 animate-pulse rounded-3xl"></div>
                <div class="bg-gray-200 h-64 my-5 animate-pulse rounded-3xl"></div>
            </div>

    </ion-content>
  </template>
  
  <script>
    import { IonContent, IonHeader, IonTitle, IonToolbar,  } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonContent, IonHeader, IonTitle, IonToolbar,  },

    });
    </script>