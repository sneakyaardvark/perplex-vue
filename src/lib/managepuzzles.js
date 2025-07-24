import api from './api'

export const create = async ({ gameId, puzzle }) => {
  return api.post(`/manage/game/${encodeURIComponent(gameId)}/puzzles`, JSON.stringify(puzzle))
}

export const remove = async ({ gameId, puzzleId }) => {
  return api.delete(`/manage/game/${encodeURIComponent(gameId)}/puzzle/${encodeURIComponent(puzzleId)}`)
}
