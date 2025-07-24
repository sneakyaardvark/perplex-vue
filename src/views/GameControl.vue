<script setup>
import GameControlCard from "@/components/GameControlCard.vue";
import GameInfoCard from "@/components/GameInfoCard.vue";
import GameStageCard from "@/components/GameStageCard.vue";
import { computed, onBeforeMount, onDeactivated, onMounted, ref } from "vue";
import { useDisplay } from "vuetify";
import * as api from "@/lib/game";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { store } from "@/store";

const { mobile } = useDisplay()
const route = useRoute()

const gameState = ref({})

const columns = computed(() => {
  return mobile.value ? 12 : 4
})

let timer

onMounted(async () => {
  // timer = setInterval(fetch, 1000)
})

onBeforeMount(async () => {
  await fetch()
})

onDeactivated(() => {
  clearInterval(timer)
})

onBeforeRouteUpdate((to, from) => {
  if (to.params.id !== from.params.id) {
    fetch(to.params.id)
  }
})

const fetch = async () => {
  try {
    gameState.value = await api.get({ gameId: route.params.id })
  } catch (e) {
    store.setError(e)
  }
}
</script>

<template>
  <v-container fluid v-if="gameState">
    <v-row>
      <v-col :cols="columns">
        <game-info-card
          :name="gameState.name"
          :time-allotted="gameState.time_allotted"
          :time-remaining="gameState.time_remaining"
          :puzzle-count="gameState.puzzle_count"
          :completed-puzzle-count="gameState.completed_puzzle_count"
        />
      </v-col>
      <v-col :cols="columns">
        <game-control-card
          :game-id="gameState.id"
          :active="gameState.active"
          v-model="gameState.status"
        />
      </v-col>
    </v-row>
    <v-container fluid v-show="gameState.active">
      <v-row>
        <v-col :cols="columns" v-for="s in gameState.stages" :key="s.stage_id">
          <game-stage-card
            :gameId="gameState.id"
            :current="s.stage_id === gameState.current_stage_id"
            :stage-name="s.stage_name"
            :stage-puzzles="s.stage_puzzles"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style scoped>

</style>
