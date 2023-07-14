<script setup>

</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-table>
          <thead>
          <tr>
            <th colspan="3">Puzzles</th>
          </tr>
          <tr class="text-left">
            <th>ID</th>
            <th>Name</th>
            <th>Stages</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="n in 5" :key="n">
            <td>a_game</td>
            <td>A Game</td>
            <td>Puz1, Puz2</td>
          </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-table>
          <thead>
          <tr>
            <th colspan="3">Stages</th>
          </tr>
          <tr class="text-left">
            <th>ID</th>
            <th>Name</th>
            <th>Puzzles</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="n in 5" :key="n">
            <td>a_stage</td>
            <td>A Stage</td>
            <td>Puz1, Puz2</td>
          </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
