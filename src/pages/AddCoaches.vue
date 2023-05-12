<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/Members"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="secondary">
          <ion-button @click="addCoach">
            <Icon icon="ph:check-bold" class="w-10 h-10" slot="icon-only" />
          </ion-button>
        </ion-buttons>
        <ion-title>Add Coaches</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <div class="min-h-full p-5 text-gray-900">
        <ion-avatar slot="start" class="mx-auto w-40 h-40">
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg"
            class="mx-auto" />
        </ion-avatar>
        <div class="">
      
          <h3 class="mx-5 pt-5 text-gray-900 text-center">Personal Information</h3>
          <!-- First Name -->
          <div class="relative flex items-center px-5 my-3 ">
            <span class="absolute">
              <Icon icon="ion:text" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
            </span>
            <input type="text" required  v-on:change="handleInputChange($event, 'firstName')"
              class="block w-full  py-3 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
              placeholder="First Name*" :clear-input="true">
          </div>
          <!-- Middle Name-->
          <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
            <span class="absolute">
              <Icon icon="ion:text" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
            </span>
            <input type="text"  v-on:change="handleInputChange($event, 'middleName')"
              class="block w-full px-16 pr-5 py-3 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
              placeholder="Middle Name">
          </div>
          <!-- Last Name-->
          <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
            <span class="absolute">
              <Icon icon="ion:text" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
            </span>
            <input type="text" required  v-on:change="handleInputChange($event, 'lastName')"
              class="block w-full px-16 pr-5 py-3 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
              placeholder="Last Name*">
          </div>
          <!--Email-->
          <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
            <span class="absolute">
              <Icon icon="material-symbols:alternate-email-rounded"
                class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
            </span>
            <input type="email" required  v-on:change="handleInputChange($event, 'email')"
              class="block w-full px-16 pr-5 py-3 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
              placeholder="Email Address*">
          </div>
          <ion-list lines="none">
            <ion-item class="w-full" >
              
              <ion-select aria-label="Gender" interface="action-sheet"   @ionChange="handleSelectChange($event, 'gender')" placeholder="Select Gender" mode="ios" expand="full"  class=" -my-3 block w-full px-16  text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300" >
                <ion-select-option value="Male">Male</ion-select-option>
                <ion-select-option value="Female">Female</ion-select-option>
                <ion-select-option value="Others">Others</ion-select-option>
              </ion-select>
            </ion-item>

          </ion-list>
          <!--Phone-->
          <div class="relative flex items-center px-5 pb-0 my-3">
            <span class="absolute">
              <Icon icon="mingcute:phone-call-line" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
            </span>
            <input type="number" required  v-on:change="handleInputChange($event, 'phone')"
              class="block w-full px-16 pr-5 py-3 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
              placeholder="Phone No*">
          </div>
          
         
          <!--Password-->
          <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
            <span class="absolute">
              <Icon icon="carbon:password" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
            </span>
            <input type="password" required  v-on:change="handleInputChange($event, 'password')"
              class="block w-full px-16 pr-5 py-3 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
              placeholder="Password*">
          </div>
        </div>
      </div>

    </ion-content>
  </ion-page>
</template>
  
<script>
import { IonPage, IonHeader, IonToolbar, IonContent, IonBackButton, IonButtons, IonTitle, IonButton, IonAvatar, IonSelect, IonSelectOption, IonItem, IonList, } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { createOutline, settingsOutline } from 'ionicons/icons';
import { Icon } from '@iconify/vue';
import backend from '../config/axios';
import { Toast } from '@capacitor/toast';
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
    IonTitle, IonButton, Icon, IonAvatar, IonSelect, IonSelectOption, IonItem, IonList,

  },

  data() {
        return {
             newCoach: { 
                firstName: '', 
                middleName: '', 
                lastName: '', 
                email: '',
                gender: '',
                phone: '+639',
                password: '',
            },
        };
    },
  setup() {
    const selectedOption = ref(false);
    const inputValue = ref('');
    return { createOutline, settingsOutline, inputValue, selectedOption };
  },
  methods: {
        async addCoach() {
            try {
                await backend.post('/v1/admin/coaches', this.newCoach);
                
                this.$router.push('/tabs/Members')
                window.location.reload()
                Toast.show({
                    text: 'Successfully added new coach.'
                })
            } catch (error) {
                console.error(error);
                Toast.show({
                    text: 'An error has occured while adding the coach.'
                })
            }
        },
        handleInputChange(event, field) {
            this.newCoach[field] = event.target.value
            console.log(this.newCoach)
        },
        handleSelectChange(event, field) {
            this.newCoach[field] = event.detail.value
        },

        markTouched() {
            this.$refs.input.$el.classList.add('ion-touched')
        },

       
    },
});
</script>
  