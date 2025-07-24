import api from './api'

function url(gameId, stageId) {
  return `/manage/game/${encodeURIComponent(gameId)}/stage/${encodeURIComponent(stageId)}`
}

export const create = async ({ gameId, stage }) => {
  return api.post(`/manage/game/${encodeURIComponent(gameId)}/stages`, JSON.stringify(stage))
}

export const update = async ({ gameId, stageId, update }) => {
  return api.patch(url(gameId, stageId), JSON.stringify(update))
}

export const remove = async ({ gameId, stageId }) => {
  return api.delete(url(gameId, stageId))
}

export const addPuzzle = async ({ gameId, stageId, puzzleId }) => {
  return api.post(url(gameId, stageId) + "/puzzles",
    JSON.stringify(puzzleId))
}

export const deletePuzzle = async ({ gameId, stageId, puzzleId }) => {
  return api.delete(url(gameId, stageId) + `/puzzle/${encodeURIComponent(puzzleId)}`)
}
