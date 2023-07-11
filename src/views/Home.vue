<template>
  <v-container class="d-flex flex-wrap align-content-start">
    <game-card v-for="n in 10" :key="n"/>
  </v-container>
</template>

<script setup>
  import GameCard from "@/components/GameCard.vue";
</script>
