<template>
  <v-container>
    <v-row v-for="g in games" :key="g.id">
      <v-col>
        <game-card v-bind="g"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import GameCard from "@/components/GameCard.vue";
import {getAll} from "@/lib/game";
import {ref} from "vue";

const games = ref(null)

async function fetch() {
  games.value = await getAll()
}

fetch()

</script>
