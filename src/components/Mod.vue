<template>
  <b-container class="mod">
    <section class="my-3">
      <b-row>
        <b-col sm="9">
          <h1>{{ name }}</h1>
          <p>{{ description }}</p>
        </b-col>
        <b-col sm="3">
          <b-row class="mt-5">
            <b-col sm="6" class="text-center px-1">
              <icon name="heart" size="lg"/>
              <br>
              <small>{{ likes }} Likes</small>
            </b-col>
            <b-col sm="6" class="text-center px-1">
              <icon name="download" size="lg"/>
              <br/>
              <small>{{ downloads }} Downloads</small>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </section>
    <section class="my-3">
      <b-row>
        <b-col sm="9" class="my-3">
          <b-card
            img-src="https://raw.githubusercontent.com/Felix-Puetz/raft-mods/main/almost-no-durability/almost-no-durability/banner.jpg"
            img-alt="banner"
            img-top>
            <b-card-text>
              <vue-markdown>{{ readme }}</vue-markdown>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import VueMarkdown from 'vue-markdown/src/VueMarkdown'
import { BRow, BContainer, BCol, BCard, BCardText } from 'bootstrap-vue'
import Icon from '@/components/Icon.vue'

export default Vue.extend({
  name: 'Mod',
  components: {
    Icon,
    BRow,
    BContainer,
    BCol,
    BCard,
    BCardText,
    VueMarkdown
  },
  props: {
    name: String,
    description: String,
    banner: String,
    category: String,
    version: String,
    releases: Array,
    author: String,
    sourceCode: String,
    downloads: Number,
    likes: Number,
    readme: String
  }
})
</script>

<style scoped lang="scss">
.mod {
  .fa-heart {
    color: #e74c3c;
  }
}
</style>
