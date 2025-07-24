<script setup>
import PuzzleStageSelect from "@/components/PuzzleStageSelect.vue";
import { setStage } from "@/lib/puzzle";
import { store } from "@/store";

const props = defineProps({
  gameId: String,
  current: Boolean,
  stageName: String,
  stagePuzzles: Array
})

async function updateStage(stage, puzzleId) {
  console.log(stage)
  try {
    await setStage({ gameId: props.gameId, stage, puzzleId })
  } catch (e) {
    store.setError(e)
  }
}
</script>

<template>
  <v-card>
    <v-card-title :class="{ current: current }">{{ props.stageName }}</v-card-title>
    <v-container>
      <v-row v-for="p in props.stagePuzzles" :key="p.puzzle_id">
        <v-col >
          <puzzle-stage-select
            @update:modelValue="(newValue) => { updateStage(newValue, p.puzzle_id) }"
            :name="p.name"
            :value="p.current_stage"
            :stages="p.puzzle_stages"
          ></puzzle-stage-select>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>
.current {
  color: rgb(var(--v-theme-primary))
}
</style>
