import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true }
})

const user = mongoose.model<any>("usuarios", userSchema);

export { userSchema, user }