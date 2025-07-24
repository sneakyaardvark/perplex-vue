<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar :title="'Perplex ' + clientVersion">
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
          <v-list-item to="/manage" exact title="Overview"></v-list-item>
          <v-list-item
            v-for="g in store.games"
            :key="g.id"
            :to="{ name: 'GameEdit', params: { id: g.id } }"
            :title="g.name"
          ></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view></router-view>
      <v-snackbar v-model="store.showError" timeout="2000">{{ store.error }}</v-snackbar>
    </v-main>
  </v-layout>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { version as clientVersion } from '@/../package.json'
import { store } from "./store";
import { getAll } from "@/lib/game";

const drawer = ref(false);

onMounted(async () => {
  try {
    store.games = await getAll()
  } catch (e) {
    store.setError(e)
  }
})
</script>
