<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/Members"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="secondary">
          <ion-button href="/tabs/Members">
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
            <input type="text" v-model="fname" required
              class="block w-full  py-3 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
              placeholder="First Name*" :clear-input="true">
          </div>
          <!-- Middle Name-->
          <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
            <span class="absolute">
              <Icon icon="ion:text" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
            </span>
            <input type="text" v-model="mname"
              class="block w-full px-16 pr-5 py-3 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
              placeholder="Middle Name">
          </div>
          <!-- Last Name-->
          <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
            <span class="absolute">
              <Icon icon="ion:text" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
            </span>
            <input type="text" v-model="lname" required
              class="block w-full px-16 pr-5 py-3 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
              placeholder="Last Name*">
          </div>
          <!--Email-->
          <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
            <span class="absolute">
              <Icon icon="material-symbols:alternate-email-rounded"
                class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
            </span>
            <input type="email" v-model="email" required
              class="block w-full px-16 pr-5 py-3 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
              placeholder="Email Address*">
          </div>
          <ion-list lines="none">
            <ion-item class="w-full" >
              
              <ion-select aria-label="Gender" interface="action-sheet" placeholder="Select Gender" mode="ios" expand="full"  class=" -my-3 block w-full px-16  text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300" >
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
            <input type="number" v-model="phone" required
              class="block w-full px-16 pr-5 py-3 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
              placeholder="Phone No*">
          </div>
          
         
          <!--Password-->
          <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
            <span class="absolute">
              <Icon icon="carbon:password" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
            </span>
            <input type="password" required
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
import { defineComponent } from 'vue';
import { createOutline, settingsOutline } from 'ionicons/icons';
import { Icon } from '@iconify/vue';
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
  setup() {
    return { createOutline, settingsOutline };
  },
  methods: {
    validateEmail(email) {
      return email.match(/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
    },

    validate(ev) {
      const value = ev.target.value;

      this.$refs.input.$el.classList.remove('ion-valid');
      this.$refs.input.$el.classList.remove('ion-invalid');

      if (value === '') return;

      this.validateEmail(value)
        ? this.$refs.input.$el.classList.add('ion-valid')
        : this.$refs.input.$el.classList.add('ion-invalid');
    },

    markTouched() {
      this.$refs.input.$el.classList.add('ion-touched')
    }
  },
});
</script>
  