<template>
  <b-navbar type="dark" toggleable="lg" sticky class="main-nav">
    <b-container>
      <b-navbar-brand href="#" class="mr-2">
        <img src="../assets/logo.png" alt="logo">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mr-auto">
          <b-nav-item :to="{name: 'mod-loader'}" class="mx-2">
            <icon name="bolt"/>
            Mod Loader
          </b-nav-item>
          <b-nav-item :to="{name: 'mod'}" class="mx-2">
            <icon name="plug"/>
            Mods
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto align-items-center">
          <b-nav-item to="home" class="mx-2">
            <icon name="discord" type="fab"/>
          </b-nav-item>
          <b-nav-item to="home" class="mx-2">
            <icon name="book"/>
          </b-nav-item>
          <b-nav-item to="home" class="mx-2">
            <icon name="donate"/>
          </b-nav-item>
          <b-nav-item to="home" class="mx-2">
            <icon name="user"/>
            Account
          </b-nav-item>
          <b-nav-item to="home" class="mx-2">
            <icon name="plus-circle" size="2x"/>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavbarToggle,
  BContainer,
  BCollapse
} from 'bootstrap-vue'
import Icon from '@/components/Icon.vue'

export default Vue.extend({
  name: 'MainNav',
  components: {
    Icon,
    BNavbar,
    BNavbarBrand,
    BNavbarNav,
    BNavbarToggle,
    BContainer,
    BCollapse
  },
  props: {
    msg: String
  }
})
</script>

<style lang="scss" scoped>
.main-nav {
  background-color: #3498db;

  .navbar-brand {
    > img {
      max-height: 48px;
    }
  }
}
</style>
