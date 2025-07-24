<script setup>
import { computed } from "vue";

const props = defineProps({
  name: String,
  timeAllotted: Number,
  timeRemaining: Number,
  puzzleCount: Number,
  completedPuzzleCount: Number
})

const timeFormatted = computed(() => {
  const d = new Date(Date.UTC(0,0,0,0,0,Number(props.timeRemaining),0))
  const parts = [
    d.getUTCHours(),
    d.getUTCMinutes(),
    d.getUTCSeconds()
  ]
  return parts.map(s => String(s).padStart(2, '0')).join(':')
})

const puzzleProgress = computed(() => {
  return props.completedPuzzleCount / props.puzzleCount * 100
})
</script>

<template>
  <v-card>
    <v-card-title>
      {{ props.name }}
    </v-card-title>
    <v-card-text class="text-center">
      <v-row>
        <v-col>
          <v-progress-circular
            class="progress"
            size="140"
            width="16"
            :model-value="(props.timeAllotted - props.timeRemaining) / props.timeAllotted * 100"
            :color="props.timeRemaining < 500 ? 'primary' : 'info'"
          >
            {{ timeFormatted }}
          </v-progress-circular>
        </v-col>
        <v-col>
          <v-progress-circular
            class="progress"
            size="140"
            width="16"
            :model-value="puzzleProgress"
            :color="puzzleProgress > 80 ? 'primary' : 'info'"
          >
            {{ props.completedPuzzleCount }} / {{ props.puzzleCount }}
          </v-progress-circular>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.progress {
  font-size: x-large;
}
</style>
