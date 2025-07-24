<script setup>
import ConfirmDialog from "@/components/ConfirmDialog.vue";
import { onBeforeMount, reactive, ref } from "vue";
import { getAllPuzzleStatus, getStages } from "@/lib/game";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { store } from "@/store";

const route = useRoute()

const confirm = reactive({
  show: false,
  loading: false,
  item: null,
})

const form = reactive({
  show: false,
  hasName: false,
  loading: false,
  name: '',
  id: ''
})

const puzzles = ref([])
const stages = ref([])

onBeforeMount(async () => {
  await fetch(route.params.id)
})

onBeforeRouteUpdate((to, from) => {
  if (to.params.id !== from.params.id) {
    fetch(to.params.id)
  }
})

const fetch = async (gameId) => {
  try {
    puzzles.value = await getAllPuzzleStatus({ gameId })
    stages.value = await getStages({ gameId })
  } catch (e) {
    store.setError(e)
  }
}

const confirmDelete = (choice) => {
  if (choice) {
    confirm.loading = true
    alert("confirmed " + confirm.item) // TODO: send DELETE
  }
  confirm.item = null
  confirm.loading = false
  confirm.show = false
}

const onSubmit = async (event) => {
  form.loading = true
  const result = await event
  if (result.valid) {
    // TODO: create resource
    alert(JSON.stringify(form, null, 2))
  }
  form.loading = false
};
</script>

<template>
  <confirm-dialog
    :show="confirm.show"
    :loading="confirm.loading"
    @response="confirmDelete"
  >
    Delete {{ confirm.item }}? This is unrecoverable!
  </confirm-dialog>
  <v-dialog v-model="form.show">
    <v-card>
      <v-card-title>
        <span class="text-h5">Create New</span>
      </v-card-title>
      <v-form @submit.prevent="onSubmit">
        <v-card-text>
          <v-container>
            <v-row v-if="form.hasName">
              <v-col>
                <v-text-field
                  v-model="form.name"
                  label="Name*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="form.id"
                  label="ID*"
                  required
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
  <v-container>
    <v-row>
      <v-col>
        <v-table>
          <thead>
          <tr>
            <th colspan="4">Puzzles</th>
          </tr>
          <tr class="text-left">
            <th>ID</th>
            <th>Name</th>
            <th>Stages</th>
            <th></th><!-- delete buttons -->
          </tr>
          </thead>
          <tbody>
          <tr v-for="p in puzzles" :key="p.puzzle_id">
            <td>{{ p.puzzle_id }}</td>
            <td>{{ p.name }}</td>
            <td>
              <v-chip v-for="s in p.puzzle_stages" :key="s">{{ s }}</v-chip>
              <v-chip
                icon="mdi-plus"
                @click="form.show = true; form.hasName = false"
              >+</v-chip>
            </td>
            <td>
              <v-btn
                icon="mdi-delete"
                variant="tonal"
                size="small"
                @click.prevent="confirm.item = n; confirm.show = true"
              ></v-btn>
            </td>
          </tr>
          <tr>
            <td colspan="4" class="text-center">
              <v-btn
                icon="mdi-plus"
                size="small"
                variant="tonal"
                @click="form.show = true; form.hasName = true"
              ></v-btn>
            </td>
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
            <th colspan="4">Stages</th>
          </tr>
          <tr class="text-left">
            <th>ID</th>
            <th>Name</th>
            <th>Puzzles</th>
            <th></th><!-- delete buttons -->
          </tr>
          </thead>
          <tbody>
          <tr v-for="s in stages" :key="s.stage_id">
            <td>{{ s.stage_id }}</td>
            <td>{{ s.stage_name }}</td>
            <td>
              <v-chip v-for="p in s.stage_puzzles" :key="p.puzzle_id">{{ p.name }}</v-chip>
              <v-chip
                icon="mdi-plus"
                @click="form.show = true; form.hasName = false"
              >+</v-chip>
            </td>
            <td>
              <v-btn
                icon="mdi-delete"
                variant="tonal"
                size="small"
                @click.prevent="confirm.item = n; confirm.show = true"
              ></v-btn>
            </td>
          </tr>
          <tr>
            <td colspan="4" class="text-center">
              <v-btn
                icon="mdi-plus"
                size="small"
                variant="tonal"
                @click="form.hasName = form.show = true"
              ></v-btn>
            </td>
          </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
