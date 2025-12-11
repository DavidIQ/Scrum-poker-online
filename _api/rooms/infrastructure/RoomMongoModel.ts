import mongoose from 'mongoose'
import composeMongoModel from '@api/shared/infrastructure/composeMongoModel'

export interface RoomMongoDoc extends mongoose.Document {
  users: {
    _id: string
    sid: string
    name: string
    isMaster: boolean
    selectedCard: string | null
    hasSelectedCard: boolean
  }[]
  reveal: boolean
  issueTrackerUrl?: string
  issue: string
}

const roomSchema = new mongoose.Schema({
  _id: String,
  users: [
    {
      _id: String,
      sid: String,
      name: String,
      isMaster: Boolean,
      selectedCard: String,
      hasSelectedCard: Boolean
    }
  ],
  reveal: Boolean,
  issueTrackerUrl: String,
  issue: String
})

const RoomMongoModel = composeMongoModel('Room', roomSchema)

export default RoomMongoModel
