export default interface Room {
  id: string
  users: RoomUser[]
  reveal: boolean
  issue: string
}

export interface RoomUser {
  id: string
  sid: string
  name: string
  isMaster: boolean
  selectedCard: string | null
  hasSelectedCard: boolean
}
