<template>
  <v-container>
    <h2 class="title">Products</h2>
    <v-layout row wrap>
      <v-flex xs3 v-for="product in products" :key="product.id">
        <v-card class="ma-3 pa-6">
          <v-card-title>
            <span class="title font-weight-light">{{ product.title }}</span>
          </v-card-title>
          <v-card-text>{{ product.price | currency }}</v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="success"
              :disabled="!product.inventory"
              @click="addToCart(product)"
            >Add to cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import store, { storeTypes } from "../store";
import { Product } from "../store/modules/products";

export default Vue.extend({
  name: "ProductList",
  computed: {
    products() {
      return store.state.products!.all;
    }
  },
  methods: {
    addToCart(product: Product) {
      store.dispatch(storeTypes.cart.actions!.addToCart(product));
    }
  }
});
</script>
