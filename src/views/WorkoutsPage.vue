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
          <ion-item href="/workoutsView" class="text-gray-900" detail="true" v-for="(workout, index) in filteredWorkouts" :key="index">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" src="../assets/imgs/thumbnail.svg" class="rounded-xl" />
            </ion-thumbnail>
            <ion-label>
              <h2>{{ workout.title }}</h2>
              <p>{{ workout.description }}</p>
            </ion-label>
          </ion-item>
        
        </ion-list>
        <ion-modal
      trigger="openModal"
      :initial-breakpoint="1.00"
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
        <ion-title>Add New Workout</ion-title>
      </ion-toolbar>
      <ion-content class="ion-padding rounded-t-3xl">
        <div class="ion-margin-top">
          <div class="">
                
                <!-- Workout Title -->
                <div class="relative flex items-center px-5 my-3 ">
                    <span class="absolute">
                        <Icon icon="ph:text-t-bold" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                    </span>
                    <input type="text" required
                        class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                        placeholder="Title*" :clear-input="true">
                </div>
                <!-- Workout Description-->
                <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
                    <span class="absolute">
                        <Icon icon="bi:text-paragraph" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                    </span>
                    <input type="text"
                        class="block w-full px-16 pr-5 py-4 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
                        placeholder="Description">
                </div>
                <!-- Last Name-->
                <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
                    <span class="absolute">
                        <Icon icon="typcn:arrow-repeat"  class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                    </span>
                    <input type="text" required
                        class="block w-full px-16 pr-5 py-4 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
                        placeholder="Reps*">
                </div>
                <!--Email-->
                <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
                    <span class="absolute">
                        <Icon icon="ant-design:flag-outlined"
                            class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                    </span>
                    <input type="email" required
                        class="block w-full px-16 pr-5 py-4 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
                        placeholder="Sets*">
                  </div>
                <!--Phone-->
                <div class="relative flex items-center px-5 pb-0 my-3">
                    <span class="absolute">
                        <Icon icon="fluent:time-picker-20-filled" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                    </span>
                    <input type="number" required
                        class="block w-full px-16 pr-5 py-4 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
                        placeholder="Time*">
                </div>

                <!--Password-->
                <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
                    <span class="absolute">
                        <Icon icon="icon-park-outline:muscle" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                    </span>
                    <input type="password" required
                        class="block w-full px-16 pr-5 py-4 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
                        placeholder="Muscle Groups*">
                </div>
                <!-- Line 1-->
                <div class="relative flex items-center px-5 my-3 ">
                    <span class="absolute">
                        <Icon icon="uil:image-share" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                    </span>
                    <input type="text" required
                        class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                        placeholder="Image URL*" :clear-input="true">
                </div>
                   <!-- Line 1-->
                   <div class="relative flex items-center px-5 my-3 ">
                    <span class="absolute">
                        <Icon icon="icon-park-outline:youtube" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                    </span>
                    <input type="text" required
                        class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                        placeholder="Youtube URL*" :clear-input="true">
                </div>
            
            </div>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonSearchbar, IonItem, IonList, IonLabel, IonThumbnail, IonModal } from '@ionic/vue';
export default defineComponent({
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonButtons, IonButton, Icon, IonItem, IonList, IonLabel, IonThumbnail, IonModal
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
