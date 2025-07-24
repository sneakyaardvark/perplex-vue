<script setup>
const props = defineProps({
  show: Boolean,
  loading: Boolean
})
const emit = defineEmits(['response'])
</script>

<template>
  <v-dialog :model-value="props.show">
    <v-card :loading="props.loading">
      <v-card-text>
        <slot></slot>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="emit('response', true)">YES</v-btn>
        <v-btn @click="emit('response', false)">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
