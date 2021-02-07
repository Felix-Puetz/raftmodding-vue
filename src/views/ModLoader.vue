<template>
  <b-container class="mod-loader">
    <img src="@/assets/mod-loader-preview.png" alt="mod-loader-preview">
  </b-container>
</template>

<script>
import Vue from 'vue'
import { BContainer } from 'bootstrap-vue'

export default Vue.extend({
  name: 'ModLoaderView',
  components: {
    BContainer
  }
})
</script>

<style scoped lang="scss">
.mod-loader {
  height: 2000px;

  > img {
    max-width: 100%;
  }
}
</style>
