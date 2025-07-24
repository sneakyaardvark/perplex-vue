<script setup>
const props = defineProps({
  name: String,
  value: String,
  stages: Array
})
</script>

<template>
  <v-select
    :base-color="props.value === 'complete' ? 'success' : null"
    variant="outlined"
    :label="props.name"
    :items="props.stages"
    @update:modelValue="newValue => $emit('update:modelValue', newValue)"
    :model-value="props.value"
  ></v-select>
</template>

<style scoped>

</style>
