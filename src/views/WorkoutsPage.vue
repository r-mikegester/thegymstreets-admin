<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="searchOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="createOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Workouts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="max-w-screen-xl p-5 mx-auto  ">
        <div class="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
          <div
            class="relative flex items-end justify-start w-full rounded-3xl text-left bg-center bg-cover h-96 dark:bg-gray-500">

            <img src="../assets/imgs/workouts/muscles-chest-dumbbell-workout-11.png" />

            <div
              class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900">
            </div>
            <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a rel="noopener noreferrer" href="#"
                class="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">CHEST
                WORKOUT</a>
              <div class="flex flex-col justify-start text-center dark:text-gray-100">
                <span class="text-3xl font-semibold leading-none tracking-wide">Coach</span>
                <span class="leading-none uppercase">Frederick</span>
              </div>
            </div>
            <h2 class="z-50 p-5">
              <a rel="noopener noreferrer" href="#" class="font-medium text-md hover:underline dark:text-gray-100">Chest
                Workout perfect for building and having a lean Pectoralis Major</a>
            </h2>
          </div>
          <div
            class="relative flex items-end justify-start w-full rounded-3xl text-left bg-center bg-cover h-96 dark:bg-gray-500">

            <img src="../assets/imgs/workouts/R.png" class="h-full" />

            <div
              class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900">
            </div>
            <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a rel="noopener noreferrer" href="#"
                class="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">Quads</a>
              <div class="flex flex-col justify-start text-center dark:text-gray-100">
                <span class="text-3xl font-semibold leading-none tracking-wide">Coach</span>
                <span class="leading-none uppercase">Frederick</span>
              </div>
            </div>
            <h2 class="z-10 p-5">

            </h2>
          </div>
          <div
            class="relative flex items-end justify-start w-full rounded-3xl text-left bg-center bg-cover h-96 dark:bg-gray-500">
            <img src="../assets/imgs/workouts/e929d0f9cbbe3050ebd6612b3d10ecf4.jpg" class="h-full" />
            <div
              class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900">
            </div>
            <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a rel="noopener noreferrer" href="#"
                class="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">Back</a>
              <div class="flex flex-col justify-start text-center dark:text-gray-100">
                <span class="text-3xl font-semibold leading-none tracking-wide">Coach</span>
                <span class="leading-none uppercase">Frederick</span>
              </div>
            </div>

          </div>
          <div
            class="relative flex items-end justify-start w-full rounded-3xl text-left bg-center bg-cover h-96 dark:bg-gray-500"
            style="background-image: url(&quot;https://source.unsplash.com/random/243x320&quot;);">
            <div
              class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900">
            </div>
            <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a rel="noopener noreferrer" href="#"
                class="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">Sports</a>
              <div class="flex flex-col justify-start text-center dark:text-gray-100">
                <span class="text-3xl font-semibold leading-none tracking-wide">19</span>
                <span class="leading-none uppercase">Jul</span>
              </div>
            </div>
            <h2 class="z-10 p-5">
              <a rel="noopener noreferrer" href="#"
                class="font-medium text-md hover:underline dark:text-gray-100">Doloribus
                sit illo necessitatibus
                architecto exercitationem enim</a>
            </h2>
          </div>
        </div>
      </div>






    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButtons, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { createOutline, searchOutline } from 'ionicons/icons';

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
    IonIcon,
    IonButtons,
    IonButton

  },
  setup() {
    return { createOutline, searchOutline };
  }
});
</script>
