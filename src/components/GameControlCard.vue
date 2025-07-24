<script setup>
import { postStatus } from "@/lib/game";
import { store } from "@/store";

const props = defineProps({
  gameId: String,
  active: {
    type: Boolean,
    default: false
  },
  modelValue: String
})

const statusOptions = ["INACTIVE", "RESET", "READY", "ACTIVE", "PAUSED", "COMPLETE"]

const setStatus = async (action, value) => {
  try {
    await postStatus({ gameId: props.gameId, action, value })
  } catch (e) {
    store.setError(e)
  }
}
</script>

<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col>
          <v-select
            :disabled="!props.active"
            label="Game Status"
            :items="statusOptions"
            :model-value="props.modelValue"
            @update:modelValue="value => {
              $emit('update:modelValue', value); setStatus('set_status', value)
            }"
          ></v-select>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn :disabled="!props.active" @click="setStatus('timer', 'toggle')">PausePlay</v-btn>
      <v-switch
        color="primary"
        :model-value="props.active"
        @update:modelValue="newValue => setStatus('active', newValue)"
      ></v-switch>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
