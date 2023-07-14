<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="App bar">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item to="/" title="Home"></v-list-item>
        <v-list-group value="Manage">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Manage"></v-list-item>
          </template>
          <v-list-item to="/manage" title="Overview"></v-list-item>
          <v-list-item to="/manage/game" title="Game"></v-list-item>
        </v-list-group>
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
