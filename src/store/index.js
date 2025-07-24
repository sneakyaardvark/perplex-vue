import { reactive } from "vue";

export const store = reactive({
  error: null,
  showError: false,
  setError(e) {
    this.error = e.message
    console.error(e.message)
    this.showError = true
  },
  games: []
})
