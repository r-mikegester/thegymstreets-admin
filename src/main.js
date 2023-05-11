import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
//import { gapi } from 'gapi-script';
import { IonicVue } from '@ionic/vue';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import './assets/tailwind.css';
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import './theme/variables.css';
import './assets/tailwind.css';
import { createPinia } from 'pinia';
const pinia = createPinia();

const app = createApp(App).use(IonicVue).use(router).use(pinia); 
app.mount('#app');
/*
gapi.load('auth2', () => {
  gapi.auth2.init({
    client_id: '42451925895-8b9od8sj8o6jtclsplpijlnqtugdo17v.apps.googleusercontent.com',
  }).then((authInstance) => {
    app.config.globalProperties.$authInstance = authInstance;
   
  });
});
*/


defineCustomElements(window)