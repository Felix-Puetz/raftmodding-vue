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
        <b-col sm="3" class="my-3">
          <b-list-group>
            <b-list-group-item class="font-weight-bold">{{ name }}</b-list-group-item>
            <b-list-group-item>
              <icon name="list-ul"/>
              This is a <b>{{ category }}</b> mod.
            </b-list-group-item>
            <b-list-group-item>
              <icon name="hashtag"/>
              Version {{ version }}<br>
              <icon name="angle-right" size="sm"/>
              <a href="#" class="small">Versions and changelogs</a>
            </b-list-group-item>
            <b-list-group-item>
              <icon name="user-circle"/>
              by <a href="#">{{ author }}</a>
            </b-list-group-item>
            <b-list-group-item v-if="sourceCode">
              <icon name="code-branch"/>
              Source Code
              <a :href="sourceCode" class="small">repository
                <icon name="external-link-alt" size="sm"/>
              </a>
            </b-list-group-item>
            <b-list-group-item v-if="isOwner">
              <icon name="pencil-alt"/>
              <a href="#" class="small">Edit this mod</a>
            </b-list-group-item>
            <b-list-group-item v-if="isOwner">
              <icon name="plus"/>
              <a href="#" class="small">Add a new version</a>
            </b-list-group-item>
            <b-list-group-item>
              <icon name="arrow-alt-circle-down"/>
              <a href="#" class="small">Download this mod</a>
              <small class="float-right mx-1">
                <b-badge pill variant="secondary">{{ downloads }}</b-badge>
              </small>
            </b-list-group-item>
          </b-list-group>
          <b-list-group class="my-4">
            <b-list-group-item class="bg-success">
              <icon name="play-circle" size="lg" class="mr-2 text-white"/>
              <a href="#" class="text-white streched-link install-button"> Install Mod </a>
            </b-list-group-item>
          </b-list-group>
          <b-list-group class="my-4">
            <b-list-group-item class="bg-primary">
              <icon name="question-circle" size="lg" class="mr-2 text-white"/>
              <a href="#" class="text-white streched-link install-button"> Need support? </a>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import VueMarkdown from 'vue-markdown/src/VueMarkdown'
import {
  BRow,
  BContainer,
  BCol,
  BCard,
  BCardText,
  BListGroup,
  BListGroupItem,
  BBadge
} from 'bootstrap-vue'
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
    BListGroup,
    BListGroupItem,
    BBadge,
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
  },
  computed: {
    isOwner () {
      return true // this would actually check the logged in user
    }
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
