<template>
  <v-snackbar :color="snackbar.type" :value="snackbar.isActive">{{ snackbar.message }}</v-snackbar>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";

export default Vue.extend({
  name: "Snackbar",
  computed: {
    snackbar() {
      return store.getters.snackbar;
    }
  }
});
</script>
