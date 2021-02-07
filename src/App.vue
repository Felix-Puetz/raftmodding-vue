<template>
  <div id="app" class="d-flex flex-column justify-content-between" :class="[`${theme}-theme`]">
    <main-nav></main-nav>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainNav from '@/components/MainNav.vue'

export default Vue.extend({
  components: { MainNav },
  data () {
    return {
      theme: 'dark'
    }
  }
})
</script>

<style lang="scss">
html,
body,
#app {
  min-height: 100%;
}

#app {
  min-height: 100%;

  &.dark-theme {
    background-color: #343a40;
    color: #dee2e6;

    .card {
      background-color: #212529;
    }
  }
}
</style>
