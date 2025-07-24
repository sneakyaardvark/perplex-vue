<script setup>
import {getStatus} from "@/lib/game";
import {ref} from "vue";
const props = defineProps({
  id: String,
  name: String
})

const status = ref(null)

async function fetch() {
  status.value = await getStatus({gameId: props.id})
}

fetch()

</script>

<template>
  <v-card v-if="status" :to="{ name: 'GameControl', params: { id: props.id } }" class="mx-auto">
    <v-img class="align-end text-white" height="200" src="@/assets/logo.svg" cover>
      <v-card-title>{{ props.name }}</v-card-title>
      <v-card-subtitle>{{ status.status }}</v-card-subtitle>
      <v-card-text>
        <v-progress-linear color="primary" :model-value="status.num_completed_puzzles / status.num_puzzles"></v-progress-linear>
      </v-card-text>
    </v-img>
  </v-card>
</template>

<style scoped>

</style>
