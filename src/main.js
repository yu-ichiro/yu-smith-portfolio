/* eslint-disable no-console */
import Vue from 'vue'
import VueHead from "vue-head";
import BootstrapVue from 'bootstrap-vue'
import OuterLink from "@/components/OuterLink";
import App from './App.vue'
import router from './route'
import { library } from "@fortawesome/fontawesome-svg-core";
import usedFonts from './fontAwesome'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import ToggleIndicator from "@/components/ToggleIndicator";

library.add(...usedFonts);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('outer-link', OuterLink);
Vue.component('toggle-indicator', ToggleIndicator);

Vue.config.productionTip = false;

Vue.use(VueHead);
Vue.use(BootstrapVue);

window.addEventListener('message', (e) => {
  if (e.data && typeof e.data === 'string' && e.data.match(/webpackHotUpdate/)) {
    console.log('%c======= HOT RELOAD =======', 'font-size: large');
  }
});

// eslint-disable-next-line no-unused-vars
export const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

import '@/assets/style/_preload.scss'
import '@/assets/style/_common.scss'