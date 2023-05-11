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
        v-model="searchTerm" :debounce="1000" @ionInput="query"></ion-searchbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="max-w-screen-xl p-5 mx-auto">
        <ion-list lines="none">
          <ion-item @click="viewWorkout(workout.id)" class="text-gray-900" detail="true" v-for="(workout, index) in workouts" :key="index">
            <ion-thumbnail slot="start">
              <img alt="Silhouette of mountains" :src="workout.imageUrl" class="rounded-xl" />
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
            <Icon icon="ph:check-bold"  class="w-20 h-20" slot="icon-only" @click="addWorkout" />
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
                    <input 
                      type="text" 
                      required
                      class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                      placeholder="Title*"
                      :clear-input="true"
                      v-on:change="handleInputChange($event, 'title')"
                      :value="newWorkout.title"
                    >
                </div>
                <!-- Workout Description-->
                <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
                    <span class="absolute">
                        <Icon icon="bi:text-paragraph" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                    </span>
                    <input
                      type="text"
                      class="block w-full px-16 pr-5 py-4 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
                      placeholder="Description"
                      v-on:change="handleInputChange($event, 'description')"
                    >
                </div>
                <!-- Last Name-->
                <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
                    <span class="absolute">
                        <Icon icon="typcn:arrow-repeat"  class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                    </span>
                    <input 
                      type="number"
                      required
                      class="block w-full px-16 pr-5 py-4 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
                      placeholder="Reps*"
                      v-on:change="handleInputChange($event, 'reps')"
                    >
                </div>
                <!--Email-->
                <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
                    <span class="absolute">
                        <Icon icon="ant-design:flag-outlined"
                            class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                    </span>
                    <input 
                      type="number"
                      required
                      class="block w-full px-16 pr-5 py-4 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
                      placeholder="Sets*"
                      v-on:change="handleInputChange($event, 'set')"
                    >
                  </div>
                <!--Phone-->
                <div class="relative flex items-center px-5 pb-0 my-3">
                    <span class="absolute">
                        <Icon icon="fluent:time-picker-20-filled" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                    </span>
                    <input 
                      type="number"
                      required
                      class="block w-full px-16 pr-5 py-4 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
                      placeholder="Time*"
                      v-on:change="handleInputChange($event, 'time')"
                    >
                </div>
                <button @click="uploadImage" >Upload</button>
                <!-- Line 1-->
                <div class="relative flex items-center px-5 my-3 ">
                    <span class="absolute">
                        <Icon icon="uil:image-share" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                    </span>
                    <input 
                      type="text"
                      required
                      class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                      placeholder="Image URL*"
                      :clear-input="true"
                      v-on:change="handleInputChange($event, 'imageUrl')"
                      :value="newWorkout?.imageUrl"
                    >
                </div>
                   <!-- Line 1-->
                   <div class="relative flex items-center px-5 my-3 ">
                    <span class="absolute">
                        <Icon icon="icon-park-outline:youtube" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                    </span>
                    <input 
                      type="text"
                      required
                      class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                      placeholder="Youtube URL*"
                      :clear-input="true"
                      v-on:change="handleInputChange($event, 'youtubeUrl')"
                    >
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
import { Camera, CameraResultType } from '@capacitor/camera';

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
      newWorkout: { 
        title: '', 
        description: '',
        muscleGroups: [],
        reps: 0,
        sets: 0,
        time: 0,
        imageUrl: '',
        youtubeUrl: ''
      },
    };
  },
  async mounted() {
    this.query()
  },
  methods: {
    viewWorkout(id) {
      this.$router.push('/workoutsView/' + id)
    },
    async addWorkout() {
      try {
        await backend.post('/v1/admin/workout-library', this.newWorkout);
        
        window.location.reload()
      } catch (error) {
        console.error(error);
      }
    },
    
    async query() {
      try {
        const response = await backend.get('/v1/admin/workout-library', {
          params: {
            keyword: this.searchTerm
          }
        });
        this.workouts = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },

    handleInputChange(event, field) {
      this.newWorkout[field] = event.target.value
    },

    dataURIToBlob(dataURI) {
        const splitDataURI = dataURI.split(',')
        const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
        const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

        const ia = new Uint8Array(byteString.length)
        for (let i = 0; i < byteString.length; i++)
            ia[i] = byteString.charCodeAt(i)

        return new Blob([ia], { type: mimeString })
      },

    async uploadImage() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl
      });

      const formData = new FormData()

      formData.append("file", this.dataURIToBlob(image.dataUrl))

      const response = await backend.post('/v1/global/file-upload', formData)

      console.log({response})
      this.newWorkout.imageUrl = response.data.data.url
    }
  },
});
</script>
