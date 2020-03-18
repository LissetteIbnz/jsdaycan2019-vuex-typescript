<template>
  <v-overlay :value="true" v-if="promiseInProgress">
    <v-progress-circular v-if="promiseInProgress" color="purple lighten-2" indeterminate width="7" size="80" />
  </v-overlay>
  <div v-else>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";

export default Vue.extend({
  name: "Loader",
  computed: {
    promiseInProgress() {
      return store.state.loading;
    }
  }
});
</script>
