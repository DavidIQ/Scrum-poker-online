import mongoose from 'mongoose'

const composeMongoModel = (
  name: string,
  schema: mongoose.Schema
): mongoose.Model<any> => mongoose.models[name] || mongoose.model(name, schema)
export default composeMongoModel
