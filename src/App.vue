<template>
  <ion-app class="overflow-hidden">
    <ion-menu content-id="main-content" :swipe-gesture="isSwipable">
      <ion-header class="ion-no-border">
        <ion-toolbar color="primary">
          <ion-title>The Gym Streets</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div>
          <img src="./assets/imgs/logo/theGYMStreet-BG.jpg" class="w-full h-full brightness-75" />
        </div>
        <div class="p-5">
          <div class="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <span class="mx-4 font-medium text-gray-400">Menu</span>
              <div class="flex py-2.5">
                <span class="p-2  rounded-md  text-blue-600">
                  <Icon icon="ci:settings" class="w-10 h-10" />
                </span>
                <div class="text-left ml-2.5">
                  <p class="text-xl text-gray-600 dark:text-gray-900 mt-3"> News </p>
                </div>
              </div>
              <div class="flex py-2.5">
                <span class="p-2  rounded-md  text-blue-600">
                  <Icon icon="ci:settings" class="w-10 h-10" />
                </span>
                <div class="text-left ml-2.5">
                  <p class="text-xl text-gray-600 dark:text-gray-900 mt-3"> Subscriptions </p>
                </div>
              </div>

          
            </nav>

          </div>
        </div>
      </ion-content>
      <ion-footer>
        <ion-toolbar>
          <ion-buttons slot="end">
            <ion-button href="/settings">
              <ion-icon slot="icon-only" :icon="settingsOutline"></ion-icon>
            </ion-button>
            <ion-button href="/login">
              <ion-icon slot="icon-only" :icon="logOutOutline"></ion-icon>
            </ion-button>
          </ion-buttons>
          <ion-title></ion-title>
        </ion-toolbar>
      </ion-footer>
    </ion-menu>
    
    <ion-router-outlet id="main-content"></ion-router-outlet>
  </ion-app>
</template>

<script setup>

import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButtons, IonButton, IonIcon } from '@ionic/vue';
import { logOutOutline, settingsOutline } from 'ionicons/icons';
import { storeToRefs } from 'pinia';
import { Icon } from '@iconify/vue';
import { useMenuStore } from './stores/useMenuStore';
const store = useMenuStore()
const { isSwipable } = storeToRefs(store);
</script>
