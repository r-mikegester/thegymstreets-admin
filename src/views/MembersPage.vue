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
      <ion-searchbar v-model="searchTerm" animated="true" placeholder="Search" mode="ios"  class=" mx-auto h-16 mb-1 md:w-2/4  text-white  bg-[#004aad]"></ion-searchbar>
    </ion-header>
    <ion-content>
      <ion-action-sheet
    trigger="open-action-sheet"
    mode="ios"
    header="Add Members"
    class="addaction"
    :buttons="actionSheetButtons"
    @ionActionSheetDidDismiss="handleActionSheetDismiss"
  ></ion-action-sheet>
      <div class=" min-h-full bg-fixed pb-0 ">
        <MembersWrap>
          <MembersTab title="Clients" class="">
              
          <div class=" max-w-screen-xl p-5 mx-auto">
           
            <ion-nav-link router-direction="forward" :component="component">
            <ion-item :href="'/clientsView/' + client.id" detail="true" lines="none" class="text-gray-900 hover:bg-gray-400 focus:text-gray-900 transition-all ease-in-out ion-activatable ripple-parent rounded-rectangle" v-for="client in filteredClients" :key="client.id">
              
               <ion-avatar slot="start">
                <img alt="Silhouette of a person's head"  :src="'https://api.dicebear.com/6.x/initials/svg?seed=' + client.firstName + client.lastName" />
              </ion-avatar>
              <ion-label>
                <h3 class="text-md">{{ client.firstName }} {{ client.middleName }} {{ client.lastName }}</h3>
                <ion-badge slot="end" color="danger" v-if="client.requiresCoaching && client.coachings.length === 0">Need Coach</ion-badge>
              </ion-label>
          <ion-ripple-effect class="customRipple"></ion-ripple-effect>
            </ion-item>
            </ion-nav-link>
          </div>

          </MembersTab>
          <MembersTab title="Coaches">
            <div class="mx-auto max-w-screen-xl p-5">
                  
                    <ion-nav-link router-direction="forward" :component="component">
                      <ion-item :href="'/coachesView/' + coach.id " detail="true" lines="none" class=" text-gray-900 hover:bg-gray-400 focus:text-gray-900 transition-all ion-activatable ripple-parent rounded-rectangle ease-in-out" v-for="coach in filteredCoaches" :key="coach.id">
                        <ion-avatar slot="start">
                          <img alt="Silhouette of a person's head"
                          :src="'https://api.dicebear.com/6.x/initials/svg?seed=' + coach.firstName" />
                        </ion-avatar>
                        <ion-label>
                          <h3 class="text-md">{{ coach.firstName }} {{ coach.middleName }} {{ coach.lastName }}</h3>
                        </ion-label>
                        <ion-ripple-effect class="customRipple"></ion-ripple-effect>
                      </ion-item>
       </ion-nav-link>

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
  IonLabel,
  IonAvatar,
  IonSearchbar, IonActionSheet, IonNavLink, IonRippleEffect
 
} from '@ionic/vue';
import MembersWrap from '../components/MembersWrap.vue';
import MembersTab from '../components/MembersTab.vue';
import ClientsView from '../components/members/clients/ClientsPage.vue';
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
    IonLabel,
    IonAvatar,
    IonSearchbar, IonActionSheet, IonNavLink,IonRippleEffect
  },
 
computed: {
  filteredClients() {
    return this.clients.filter(client => 
      client?.firstName?.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      client?.middleName?.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      client?.lastName?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  },
  filteredCoaches() {
    return this.coaches.filter(coach => coach.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) || coach.middleName.toLowerCase().includes(this.searchTerm.toLowerCase()) || coach.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()));
  },
}, 
methods: {
  handleActionSheetDismiss(event) {
    const buttonClicked = event.detail.role;
    const buttonData = event.detail.data;

    if (buttonClicked !== 'cancel' && buttonData && buttonData.route) {
      this.$router.push(buttonData.route);
    }
  },
},
  setup() {
    const actionSheetButtons = [
        {
          text: 'Clients',
          role: 'add Clients',
          data: {
            route: '/addclients',
          },
        },
        {
          text: 'Coaches',
          role: 'add Coaches',
          data: {
            route: '/addcoaches',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel ',
          },
        },
      ];
    return{
      personAddOutline, personCircle, actionSheetButtons, component: ClientsView,
    }
  },
  data() {
    return {
      clients: [],
      coaches: [],
      admins: [],
      searchTerm: '',
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

.customRipple{
  color: #501ace;
}
</style>