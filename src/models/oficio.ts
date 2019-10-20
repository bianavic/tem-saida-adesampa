import mongoose from 'mongoose';
import Ioficio from '../types/IOficio'

const oficioSchema = new mongoose.Schema({
  nome: {type: String, required: true},
  rg: {type: String, required: true, unique: true},
  cpf: {type: String, required: true, unique: true},
  dataNascimento: {type: Date},
  nacionalidade : {type: String},
  estadoCivil: {type: String, enum: ['solteiro','casado', 'divorciado', 'viuvo']},
  filhos: {
    possuiFilho: {type: Boolean},
    filho: [{
      nome: { type: String, required: true },
      idade: {type: Number}
    }]
  },
  contato: {
      cep: { type: Number },
      endereco: { type: String},
      complemento: {type : String},
      bairro: {type: String},
      cidade: {type: String},
      estado: {type: String},
      horarioDeContato: {type: String, enum: ['manha','tarde', 'noite']},
      telefone: {
          numero: {type: String},
          recado: {type: Boolean}
      },
    email: {type: String, required: true, unique: true}      
  },
  dataCriacao: { type: Date, default: Date.now }
});

const oficio = mongoose.model<Ioficio>('oficios', oficioSchema);

export { oficioSchema, oficio };
