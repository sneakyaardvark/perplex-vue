<template>
  <v-container>
    <v-row v-for="n in 11" :key="n">
      <v-col>
        <game-card :to="'/game/' + String(n)"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import GameCard from "@/components/GameCard.vue";
</script>
