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
                          <img alt="Silhouette of a person's head"
                            src="https://ionicframework.com/docs/img/demos/avatar.svg" class="mx-auto"/>
                        </ion-avatar>
                <ion-list :inset="true" lines="none">
                    <ion-item>
    <ion-input label="First Name*" labelPlacement="floating" placeholder="Enter text" class="text-gray-900 font-medium " fill="outline" :counter="true"
    :maxlength="30" required></ion-input>
  </ion-item>
  
  <ion-item>
    <ion-input label="Middle Name" labelPlacement="floating" placeholder="Enter text" class="text-gray-900 font-medium " fill="outline" :counter="true"
    :maxlength="30"></ion-input>
  </ion-item>
  
  <ion-item>
    <ion-input label="Last Name*" labelPlacement="floating" placeholder="Enter text" class="text-gray-900 font-medium " fill="outline" required :counter="true"
    :maxlength="30"></ion-input>
  </ion-item>
  
  <ion-item>
    <ion-input label="Email*" labelPlacement="floating" placeholder="Enter text" class="text-gray-900 font-medium " fill="outline" ref="input" type="email" :counter="true"
    :maxlength="30" helper-text="Enter a valid email" error-text="Invalid email" @ionInput="validate" @ionBlur="markTouched"></ion-input>
  </ion-item>
</ion-list>
            </div>

        </ion-content>
    </ion-page>
</template>
  
<script>
import { IonPage, IonHeader, IonToolbar, IonContent, IonBackButton, IonButtons, IonTitle, IonList, IonItem, IonInput, IonButton, IonAvatar } from '@ionic/vue';
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
        IonTitle, IonList, IonItem, IonInput, IonButton, Icon, IonAvatar

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
  