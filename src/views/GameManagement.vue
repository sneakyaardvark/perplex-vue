<script setup>
import {ref} from "vue";

const create_overlay = ref(false)
</script>

<template>
  <v-list class="mx-auto">
    <v-list-item v-for="n in 10" :key="n" to="/manage/{{n}}" title="Game {{n}}" value="game_{{n}}"></v-list-item>
    <v-list-item @click.stop="create_overlay = !create_overlay" title="Create New" value="create_new">
      <template v-slot:prepend>
        <v-icon icon="mdi-pencil-plus"></v-icon>
      </template>
    </v-list-item>
  </v-list>
  <v-dialog v-model="create_overlay">
    <v-card>
      <v-card-title>
        <span class="text-h5">New Game</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
            >
              <v-text-field
                label="Game Name*"
                required
              ></v-text-field>
            </v-col>
            </v-row>
          <v-row>
            <v-col
            >
              <v-text-field
                label="Game ID*"
                hint="unique identifier for the game"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col
            >
              <v-text-field
                label="Duration"
                hint="Time limit of the game in seconds. Default is 3600 (1 hour)."
                type="number"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="create_overlay = false"
        >
          Cancel
        </v-btn>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="create_overlay = false"
        >
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
