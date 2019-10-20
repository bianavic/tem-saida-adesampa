import mongoose from 'mongoose';
import Iuser from '../types/IUser'

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true }
})

const user = mongoose.model<Iuser>("usuarios", userSchema);

export { userSchema, user }