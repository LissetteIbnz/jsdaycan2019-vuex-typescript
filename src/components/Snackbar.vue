<template>
  <v-snackbar :color="snackbar.type" :value="snackbar.isActive">{{ snackbar.message }}</v-snackbar>
</template>

<script lang="ts">
import Vue from "vue";
import store, { storeTypes, RootState } from "../store";

export default Vue.extend({
  name: "Snackbar",
  computed: {
    snackbar(): RootState["snackbar"] {
      return store.getters[storeTypes.root.getters.snackbar];
    }
  }
});
</script>
