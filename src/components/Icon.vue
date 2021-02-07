<template>
  <i class="fa mx-1" :class="[`fa-${name}`, type, sizeCls]"></i>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'fas',
      validator (val) {
        return ['far', 'fas', 'fab'].includes(val)
      }
    },
    size: {
      type: String,
      validator (val) {
        return ['xs', 'sm', 'lg', '2x', '3x', '5x', '7x', '1ßx'].includes(val)
      }
    }
  },
  computed: {
    sizeCls () {
      return this.size ? `fa-${this.size}` : null
    }
  }
})
</script>
