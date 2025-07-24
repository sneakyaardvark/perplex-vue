import api from './api'

export const create = async ({ game }) => {
  return api.post('/manage/games', JSON.stringify(game))
}

export const update = async ({ gameId, update }) => {
  return api.patch(`/manage/game/${encodeURIComponent(gameId)}`, JSON.stringify(update))
}

export const remove = async ({ gameId }) => {
  return api.delete(`/manage/game/${encodeURIComponent(gameId)}`)
}
