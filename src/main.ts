import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./core/plugins/vuetify";

Vue.use(vuetify);

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount("#app");
