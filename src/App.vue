<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="App bar">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary="true">
      <v-list>
        <v-list-item to="/" title="Home"></v-list-item>
        <v-list-item to="/manage" title="Manage"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script setup>
import {ref} from "vue";

const drawer = ref(false);

</script>
