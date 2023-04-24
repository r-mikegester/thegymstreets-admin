<template>
  <ion-page>
    <ion-header class="ion-no-border bg-[#004aad]">
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button id="open-action-sheet">
            <ion-icon slot="icon-only" :icon="personAddOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Members</ion-title>
      </ion-toolbar>
      <ion-searchbar animated="true" placeholder="Search" mode="ios"  class=" mx-auto h-16 md:w-2/4 text-white  bg-[#004aad]"></ion-searchbar>
    </ion-header>
    <ion-content>
      <ion-action-sheet
    trigger="open-action-sheet"
    mode="ios"
    header="Add Members"
    class="addaction"
    :buttons="actionSheetButtons"
  ></ion-action-sheet>
      <div class=" min-h-full bg-fixed pb-0 ">
        <MembersWrap>
          <MembersTab title="Clients">
          
            
          <div class=" max-w-screen-xl p-5 mx-auto">
            <ion-item lines="none" class="text-gray-900" v-for="client in clients" :key="client.id">
              <ion-avatar slot="start">
                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
              </ion-avatar>
              <ion-label>
                <h3 class="text-md">{{ client.firstName }} {{ client.middleName }} {{ client.lastName }}</h3>
                <ion-badge slot="end" color="danger" v-if="client.requiresCoaching && client.coachings.length === 0">Need Coach</ion-badge>
              </ion-label>
         
            </ion-item>
          </div>

          </MembersTab>
          <MembersTab title="Coaches">
            <div class="mx-auto max-w-screen-xl p-5">
              <div class="mx-0  justify-center">
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
  IonReorderGroup,
  IonLabel,
  IonAvatar,
  IonSearchbar, IonActionSheet
 
} from '@ionic/vue';
import MembersWrap from '../components/MembersWrap.vue';
import MembersTab from '../components/MembersTab.vue';
import { personAddOutline, personCircle, } from 'ionicons/icons';
import { defineComponent} from 'vue';
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
    IonSearchbar, IonActionSheet
  },
  setup() {
    const actionSheetButtons = [
        {
          text: 'Clients',
          role: 'add Clients',
          data: {
            action: '/addclients',
          },
        },
        {
          text: 'Coaches',
          role: 'add Coaches',
          data: {
            action: '/addcoaches',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ];
    return{
      personAddOutline, personCircle, actionSheetButtons
    }
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