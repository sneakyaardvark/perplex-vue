<script setup>
import { reactive } from 'vue';
import ConfirmDialog from "@/components/ConfirmDialog.vue";
import { store } from "@/store";
// import {create} from '@/lib/managegame'

const confirm = reactive({
  show: false,
  loading: false
})

const form = reactive({
  show: false,
  loading: false,
  gameName: '',
  gameId: '',
  duration: 3600
})

async function onSubmit(event) {
  form.loading = true
  const result = await event
  if (result.valid) {
    // TODO: create resource
    alert(JSON.stringify(form, null, 2))
  }
  form.loading = false
}

const confirmDelete = (choice) => {
  if (choice) {
    confirm.loading = true
    alert('Confirmed') // TODO: send DELETE
  }
  confirm.loading = false
  confirm.show = false
}
</script>

<template>
  <v-list class="mx-auto">
    <v-list-item
      v-for="g in store.games"
      :key="g.id"
      :to="'/manage/' + g.id"
      :title="g.name"
      :value="g.id"
    >
      <template v-slot:append>
        <v-btn icon="mdi-delete" @click.prevent="confirm.show = true"></v-btn>
      </template>
    </v-list-item>
    <v-list-item @click.stop="form.show = true" title="Create New" value="create_new">
      <template v-slot:prepend>
        <v-icon icon="mdi-pencil-plus"></v-icon>
      </template>
    </v-list-item>
  </v-list>
  <confirm-dialog :show="confirm.show" :loading="confirm.loading" @response="confirmDelete">
    Are you sure you want to delete this game? This is unrecoverable!
  </confirm-dialog>
  <v-dialog v-model="form.show">
    <v-card>
      <v-card-title>
        <span class="text-h5">New Game</span>
      </v-card-title>
      <v-form
        @submit.prevent="onSubmit"
      >
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
              >
                <v-text-field
                  v-model="form.gameName"
                  label="Game Name*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
              >
                <v-text-field
                  v-model="form.gameId"
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
                  v-model="form.duration"
                  label="Duration"
                  placeholder="3600"
                  hint="Time limit of the game in seconds. Default is 3600 (1 hour)."
                  type="number"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="form.show = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            :loading="form.loading"
            type="submit"
            @click="form.show = false"
          >
            Create
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
