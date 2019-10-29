import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { vuetify } from "./core/plugins";
import { currency } from "./core/filters";

Vue.filter("currency", currency);

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount("#app");
