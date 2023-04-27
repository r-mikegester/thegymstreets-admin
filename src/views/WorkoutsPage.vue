<template>
  <ion-page>
    <ion-header class="bg-[#004aad]">
      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button id="openModal">
            <Icon icon="solar:add-circle-broken" class="w-20 h-20" slot="icon-only" />
          </ion-button>
        </ion-buttons>
        <ion-title>Workouts Library</ion-title>
      </ion-toolbar>
      <ion-searchbar animated="true" placeholder="Search" mode="ios" class="mx-auto h-16 text-white md:w-2/4 bg-[#004aad]"
        v-model="searchTerm"></ion-searchbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="max-w-screen-xl p-5 mx-auto">
        <ion-list lines="none">
          <ion-item class="text-gray-900" v-for="(workout, index) in filteredWorkouts" :key="index">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="../assets/imgs/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>
              <h2>{{ workout.title }}</h2>
              <p>{{ workout.description }}</p>
            </ion-label>
          </ion-item>
        
        </ion-list>
        <ion-modal
      trigger="openModal"
      :initial-breakpoint="0.25"
      :breakpoints="[0, 0.25, 0.5, 0.75, 1.00]"
      handle-behavior="cycle"
      class="text-gray-900"
    >
     <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button id="openModal">
            <Icon icon="ph:check-bold"  class="w-20 h-20" slot="icon-only" />
          </ion-button>
        </ion-buttons>
        <ion-title> Add New Workout</ion-title>
      </ion-toolbar>
      <ion-content class="ion-padding">
        <div class="ion-margin-top">
          <ion-label>Click the handle above to advance to the next breakpoint.</ion-label>
          <ion-item>
            <ion-input v-model.trim="newWorkout.title" placeholder="Title" type="text" label="workoutTitle"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input v-model.trim="newWorkout.description" placeholder="Description" type="text" label="workoutDescription"></ion-input>
          </ion-item>
        </div>
      </ion-content>
    </ion-modal>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>

import { defineComponent } from 'vue';
import { createOutline } from 'ionicons/icons';
import { Icon } from '@iconify/vue';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css/free-mode';
import backend from '../config/axios';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonSearchbar, IonItem, IonList, IonLabel, IonThumbnail, IonInput, IonModal } from '@ionic/vue';
export default defineComponent({
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonButtons, IonButton, Icon, IonItem, IonList, IonLabel, IonThumbnail, IonInput, IonModal
  },
  setup() {
    return {
      createOutline,
      modules: [FreeMode, Pagination],
    };
  },
  data() {
    return {
      workouts: [],
      searchTerm: '',
      newWorkout: { title: '', description: '' },
    };
  },
  async mounted() {
    try {
      const response = await backend.get('/v1/admin/workout-library');
      this.workouts = response.data.data;
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    filteredWorkouts() {
      return this.workouts.filter((workout) =>
        workout.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    async addWorkout() {
      try {
        const response = await backend.post('/v1/admin/workout-library', {
          title: this.newWorkout.title,
          description: this.newWorkout.description,
        });
        this.workouts.push(response.data.data);
        this.newWorkout = { title: '', description: '' };
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>
