import api from './api'

export const setStage = async ({ gameId, puzzleId, stage }) => {
  return (await api.post(`/game/${encodeURIComponent(gameId)}/puzzle/${encodeURIComponent(puzzleId)}`,
    JSON.stringify({ action: 'set_stage', value: stage })))
}
