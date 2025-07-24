import api from './api'

export const getAll = async () => {
  return (await api.get('/games')).data
}

export const getActive = async () => {
  return (await api.get('/games/active')).data
}

export const get = async ({ gameId }) => {
  return (await api.get(`/game/${encodeURIComponent(gameId)}`)).data
}

export const getStatus = async ({ gameId }) => {
  return (await api.get(`/game/${encodeURIComponent(gameId)}/status`)).data
}

export const postStatus = async ({ gameId, action, value }) => {
  return (await api.post(`/game/${encodeURIComponent(gameId)}/status`, JSON.stringify({ action, value })))
}

export const getAllPuzzleStatus = async ({ gameId }) => {
  return (await api.get(`/game/${encodeURIComponent(gameId)}/puzzles`)).data
}

export const getStages = async ({ gameId }) => {
  return (await api.get(`/game/${encodeURIComponent(gameId)}/stages`)).data
}
