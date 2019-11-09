<template>
  <v-container>
    <p v-show="!products.length">
      <i>Please add some products to cart.</i>
    </p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} x
        {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <v-btn color="primary" :disabled="!products.length" @click="checkout(products)">Checkout</v-btn>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import store, { storeTypes } from "../store";
import { CartProductsGetter, CheckoutStatus } from "../store/modules/cart";
import { Product } from "../store/modules/products";

export default Vue.extend({
  name: "ShoppingCart",
  computed: {
    total() {
      return store.getters.cartTotalPrice;
    },
    products() {
      return store.getters.cartProducts;
    },
    checkoutStatus() {
      return store.getters.checkoutStatus;
    }
  },
  methods: {
    checkout(products: Product[]) {
      store.dispatch(storeTypes.cart.actions!.checkout(products));
    }
  }
});
</script>
