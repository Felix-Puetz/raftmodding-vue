<template>
  <div class="home">
    <mod name="Almost No Durability"
         description="makes all tools and equipment more durable"
         :likes="11"
         :downloads="10248"
         :readme="modReadme"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Mod from '@/components/Mod.vue'
import modReadme from '@/assets/mod-readme.js'

export default Vue.extend({
  name: 'Home',
  components: { Mod },
  data () {
    return {
      modReadme
    }
  }
})
</script>
