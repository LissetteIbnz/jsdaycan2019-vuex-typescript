<template>
  <v-app>
    <v-app-bar app color="green accent-5" dark>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-black pr-1">Vuex</span>
        <span class="font-weight-light">SHOPPING CART</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <loader>
        <product-list />
        <shopping-cart />
      </loader>
    </v-content>

    <snackbar />

    <v-btn color="success" @click="reloadProducts()">Reload</v-btn>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import store, { storeTypes } from "./store";
import { RootState } from "./store/root.models";
import { Loader, Snackbar, ShoppingCart, ProductList } from "./components";

export default Vue.extend({
  name: "App",
  components: { Loader, Snackbar, ShoppingCart, ProductList },
  created() {
    this.reloadProducts();
  },
  methods: {
    reloadProducts() {
      store.dispatch(storeTypes.products.actions!.getAllProducts());
    }
  },
});
</script>
