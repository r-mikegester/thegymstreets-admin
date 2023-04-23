<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button @click="presentAlert">
            <ion-icon slot="icon-only" :icon="personAddOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Members</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class=" min-h-full bg-fixed pb-0 ">
        <MembersWrap>
          <MembersTab title="Clients">
            <!-- <div class=" my-5 text-gray-600 ">
                <div class=" ion-activatable ripple-parent rectangle">
                  <ion-item-sliding>
                    <ion-ripple-effect></ion-ripple-effect>
                    <ion-item lines="none" class="text-gray-900" v-for="client in clients" :key="client.id">
                      <ion-avatar slot="start">
                        <img alt="Silhouette of a person's head"
                          src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                      </ion-avatar>
                      <ion-label>
                        <h3 class="text-md">{{ client.firstName }} {{ client.middleName }} {{ client.lastName }}</h3>
                        <ion-badge slot="end" color="danger">Need Coach</ion-badge>
                      </ion-label>
                      <ion-reorder slot="end"></ion-reorder>

                    </ion-item>
                    <ion-item-options side="end">
                      <ion-item-option>View More</ion-item-option>
                      <ion-item-option color="danger">Delete</ion-item-option>
                    </ion-item-options>
                  </ion-item-sliding>
                </div>
            </div> -->
            <ion-item lines="none" class="text-gray-900" v-for="client in clients" :key="client.id">
              <ion-avatar slot="start">
                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
              </ion-avatar>
              <ion-label>
                <h3 class="text-md">{{ client.firstName }} {{ client.middleName }} {{ client.lastName }}</h3>
                <ion-badge slot="end" color="danger">Need Coach</ion-badge>
              </ion-label>
              <ion-reorder slot="end"></ion-reorder>
            </ion-item>

          </MembersTab>
          <MembersTab title="Coaches">
            <div class="mx-auto">
              <div class="mx-0  my-5 justify-center">
                <div
                  class=" max-w-9xl text-gray-900 col-span-3 md:col-span-2 row-span-3 row-start-1  justify-center  row-end-3 rounded-3xl">
                  <div class="flex flex-col  max-w-3xl rounded-3xl  h-full">

                    <ion-reorder-group>

                      <ion-item lines="none" class="text-gray-900" v-for="coaches in coaches" :key="coaches.id">
                        <ion-avatar slot="start">
                          <img alt="Silhouette of a person's head"
                            src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </ion-avatar>
                        <ion-label>
                          <h3 class="text-md">{{ coaches.firstName }} {{ coaches.middleName }} {{ coaches.lastName }}</h3>
                        </ion-label>
                        <ion-reorder slot="end"></ion-reorder>
                      </ion-item>
                    </ion-reorder-group>
                  </div>
                </div>
              </div>
            </div>

          </MembersTab>
          <MembersTab title="Admin">
            <div class="mx-auto">
              <div class="mx-0  my-5 justify-center">
                <div
                  class=" max-w-9xl text-gray-900 col-span-3 md:col-span-2 row-span-3 row-start-1  justify-center row-end-3 rounded-3xl">
                  <div class="flex flex-col  max-w-3xl rounded-3xl  h-full">
                    <ion-reorder-group>

                      <ion-item lines="none" class="text-gray-900" v-for="admins in admins" :key="admins.id">
                        <ion-avatar slot="start">
                          <img alt="Silhouette of a person's head"
                            src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </ion-avatar>
                        <ion-label>
                          <h3 class="text-md">{{ admins.firstName }} {{ admins.middleName }} {{ admins.lastName }}</h3>
                        </ion-label>
                        <ion-reorder slot="end"></ion-reorder>
                      </ion-item>

                    </ion-reorder-group>
                  </div>
                </div>
              </div>
            </div>

          </MembersTab>

        </MembersWrap>

      </div>


    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonToolbar,
  IonContent,
  IonHeader,
  IonTitle,
  IonIcon,
  IonItem,
  IonButtons,
  IonButton,
  IonBadge,
  alertController,
  IonReorderGroup,
  IonLabel,
  IonAvatar,
  IonReorder
} from '@ionic/vue';
import MembersWrap from '../components/MembersWrap.vue';
import MembersTab from '../components/MembersTab.vue';
import { informationCircleOutline, personAddOutline, searchOutline, personCircle, reorderTwoOutline } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
import backend from '../config/axios'
export default defineComponent({
  components: {
    MembersTab,
    MembersWrap,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonItem,
    IonButtons,
    IonButton,
    IonBadge,
    IonReorderGroup,
    IonLabel,
    IonAvatar,
    IonReorder
  },
  computed: {
    handleReorder() {
      return (event) => {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        event.detail.complete();
      };
    },
  },
  setup() {
    let isDisabled = ref(true);

    const toggleReorder = () => {
      isDisabled.value = !isDisabled.value;
    }
    const presentAlert = async () => {
      const alert = await alertController.create({
        backgroundColor: '#004aad',
        header: 'ADD MEMBER',
        buttons: ['ADD'],
        inputs: [
          {
            placeholder: 'Name:',
            color: '#000000',
          },
          {
            placeholder: 'Age:',
            type: 'number',
            attributes: {
              maxlength: 2,
            },
          },
          {
            placeholder: 'Need Coach?',
          },
          {
            type: 'radio',
            value: 'Need Coach ?',
            color: '#000000',
          },
          {
            type: 'textarea',
            placeholder: 'Sessions:',
          },
        ],
      });

      await alert.present();
    };

    return { presentAlert, informationCircleOutline, personAddOutline, searchOutline, personCircle, reorderTwoOutline, isDisabled, toggleReorder };
  },
  data() {
    return {
      clients: [],
      coaches: [],
      admins: [],
    };
  },
  async mounted() {
    const clientsResult = await backend.get('/v1/admin/clients')
    const coachesResult = await backend.get('/v1/admin/coaches')
    const adminsResult = await backend.get('/v1/admin/admins')
    this.clients = clientsResult.data.data
    this.coaches = coachesResult.data.data
    this.admins = adminsResult.data.data
  },
});
</script>

<style scoped>
.ripple-parent {
  position: relative;
  overflow: hidden;

  border: 1px solid transparent;
  border-radius: 10px;
  margin: 5px;
}

.rectangle {
  width: 97vw;
  height: auto;
}
</style>