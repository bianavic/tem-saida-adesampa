import { Document } from 'mongoose'

export default interface Iuser extends Document {
    nome: string;
    email: string;
    password: string;

}