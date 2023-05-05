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
                <ion-title>Add Clients</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">

            <div class="min-h-full p-5 text-gray-900">
                <ion-avatar slot="start" class="mx-auto w-40 h-40">
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg"
                        class="mx-auto" />
                </ion-avatar>
                <div class="">
                
                    <h3 class="mx-5 pt-5 text-gray-900">Personal Information</h3>
                    <!-- First Name -->
                    <div class="relative flex items-center px-5 my-3 ">
                        <span class="absolute">
                            <Icon icon="ion:text" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                        </span>
                        <input type="text" required
                            class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                            placeholder="First Name*" :clear-input="true">
                    </div>
                    <!-- Middle Name-->
                    <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
                        <span class="absolute">
                            <Icon icon="ion:text" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                        </span>
                        <input type="text"
                            class="block w-full px-16 pr-5 py-4 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
                            placeholder="Middle Name">
                    </div>
                    <!-- Last Name-->
                    <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
                        <span class="absolute">
                            <Icon icon="ion:text" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                        </span>
                        <input type="text" required
                            class="block w-full px-16 pr-5 py-4 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
                            placeholder="Last Name*">
                    </div>
                    <!--Email-->
                    <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
                        <span class="absolute">
                            <Icon icon="material-symbols:alternate-email-rounded"
                                class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                        </span>
                        <input type="email" required
                            class="block w-full px-16 pr-5 py-4 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
                            placeholder="Email Address*">
                    </div>
                    <ion-list lines="none">
                        <ion-item class="w-full">

                            <ion-select aria-label="Gender" interface="action-sheet" placeholder="Select Gender" mode="ios"
                                expand="full"
                                class=" -my-3 block w-full px-16  text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300">
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
                        <input type="number" required
                            class="block w-full px-16 pr-5 py-4 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
                            placeholder="Phone No*">
                    </div>

                    <!--Password-->
                    <div class="relative flex items-center px-5 pt-2 pb-0 my-3">
                        <span class="absolute">
                            <Icon icon="carbon:password" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                        </span>
                        <input type="password" required
                            class="block w-full px-16 pr-5 py-4 text-gray-700 text-xl bg-white rounded-xl dark:bg-white focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300"
                            placeholder="Password*">
                    </div>
                    <!-- Line 1-->
                    <div class="relative flex items-center px-5 my-3 ">
                        <span class="absolute">
                            <Icon icon="uil:wrap-text" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                        </span>
                        <input type="text" required
                            class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                            placeholder="Line1*" :clear-input="true">
                    </div>
                    <!-- Line 2-->
                    <div class="relative flex items-center px-5 my-3 ">
                        <span class="absolute">
                            <Icon icon="uil:wrap-text" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                        </span>
                        <input type="" required
                            class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                            placeholder="Line2*" :clear-input="true">
                    </div>
                    <!-- City -->
                    <div class="relative flex items-center px-5 my-3 ">
                        <span class="absolute">
                            <Icon icon="solar:city-outline" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                        </span>
                        <input type="text" required
                            class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                            placeholder="City*" :clear-input="true">
                    </div>
                    <!-- State -->
                    <div class="relative flex items-center px-5 my-3 ">
                        <span class="absolute">
                            <Icon icon="tabler:building-estate" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                        </span>
                        <input type="text" required
                            class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                            placeholder="State*" :clear-input="true">
                    </div>
                    <!-- Postal -->
                    <div class="relative flex items-center px-5 my-3 ">
                        <span class="absolute">
                            <Icon icon="ic:round-share-location" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                        </span>
                        <input type="number" required
                            class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                            placeholder="Postal Code*" :clear-input="true">
                    </div>
                    <h3 class="mx-5 text-gray-900">Do you Need Coaching ?</h3>
                    <div class="">
                        <ion-radio-group v-model="selectedOption">
                            <ion-item lines="none" class="">
                                <h3 class="leading-relaxed text-2xl my-auto pr-3 text-gray-500">Yes</h3>
                                <ion-radio :value="true"></ion-radio>
                                <h3 class="leading-relaxed text-2xl my-auto pr-3 text-gray-500">No</h3>
                                <ion-radio :value="false"></ion-radio>
                            </ion-item>
                        </ion-radio-group>

                        <!-- Age -->
                        <div class="relative flex items-center px-5 my-3 " v-if=selectedOption>
                            <span class="absolute">
                                <Icon icon="tabler:calendar" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                            </span>
                            <input type="number" required
                                class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                                placeholder="Age*" :clear-input="true">
                        </div>
                        <!-- Weight -->
                        <div class="relative flex items-center px-5 my-3 " v-if=selectedOption>
                            <span class="absolute">
                                <Icon icon="uil:weight" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                            </span>
                            <input type="number" required
                                class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                                placeholder="Weight* in kg" :clear-input="true">
                        </div>
                        <!-- Height -->
                        <div class="relative flex items-center px-5 my-3 " v-if=selectedOption>
                            <span class="absolute">
                                <Icon icon="game-icons:body-height" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                            </span>
                            <input type="number" required
                                class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                                placeholder="Height* in cm" :clear-input="true">
                        </div>
                        <!-- Workout Level -->
                        <div class="relative flex items-center px-5 my-3 " v-if=selectedOption>
                            <span class="absolute">
                                <Icon icon="emojione-monotone:level-slider"
                                    class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                            </span>
                            <input type="text" required
                                class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                                placeholder="Workout Level* e.g. Beginner, Intermediate, Advanced" :clear-input="true">
                        </div>
                        <!-- Workout Preference -->
                        <div class="relative flex items-center px-5 my-3 " v-if=selectedOption>
                            <span class="absolute">
                                <Icon icon="iconoir:gym" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                            </span>
                            <input type="text" required
                                class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                                placeholder="Workout Preference* e.g. Upper, Core, Chest, Back" :clear-input="true">
                        </div>
                        <!-- Availability -->
                        <div class="relative flex items-center px-5 my-3 " v-if=selectedOption>
                            <span class="absolute">
                                <Icon icon="mdi:event-available-outline"
                                    class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                            </span>
                            <input type="text" required
                                class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                                placeholder="Availability* e.g. Monday, Tuesday" :clear-input="true">
                        </div>
                        <!-- Coach Gender -->
                        <div class="relative flex items-center px-5 my-3 " v-if=selectedOption>
                            <span class="absolute">
                                <Icon icon="iconoir:verified-user" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                            </span>
                            <input type="number" required
                                class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                                placeholder="Coach Gender* e.g. Male or Female" :clear-input="true">
                        </div>
                        <!-- Goal -->
                        <div class="relative flex items-center px-5 my-3 " v-if=selectedOption>
                            <span class="absolute">
                                <Icon icon="octicon:goal-16" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                            </span>
                            <input type="number" required
                                class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                                placeholder="Goal*" :clear-input="true">
                        </div>
                        <!-- Notes -->
                        <div class="relative flex items-center px-5 my-3 " v-if=selectedOption>
                            <span class="absolute">
                                <Icon icon="solar:notes-outline" class="w-7 h-7 mx-5 text-gray-300 dark:text-gray-500" />
                            </span>
                            <input type="text" required
                                class="block w-full  py-4 text-gray-700 text-xl bg-white rounded-xl px-16 pr-5 dark:bg-white  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-gray-300 "
                                placeholder="Notes*" :clear-input="true">
                        </div>


                    </div>
                </div>
            </div>

        </ion-content>
    </ion-page>
</template>
    
<script>
import { IonPage, IonHeader, IonToolbar, IonContent, IonBackButton, IonButtons, IonTitle, IonButton, IonAvatar, IonSelect, IonSelectOption, IonItem, IonList, IonRadioGroup, IonRadio } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
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
        IonTitle, IonButton, Icon, IonAvatar, IonSelect, IonSelectOption, IonItem, IonList, IonRadioGroup, IonRadio

    },
    setup() {
        const selectedOption = ref(false);
        const inputValue = ref('');


        return {
            createOutline, settingsOutline, selectedOption,
            inputValue,
        };
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
    