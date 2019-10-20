import mongoose from 'mongoose';

const oficioSchema = new mongoose.Schema({
  nome: {type: String, required: true},
  rg: {type: String, required: true, unique: true},
  cpf: {type: String, required: true, unique: true},
  dataNascimento: {type: Date,},
  nacionalidade : {type: String},
  estadoCivil: {type: String, enum: ['Solteiro','Casado', 'Divorciado', 'Viuvo']},
  filhos: {
    possuiFilho: {type: Boolean},
    quantity: {type: Number}
  },
  contato: {
      cep: { type: String},
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
    email: {type: String}      
  },
  created_at: { type: Date, default: Date.now }
});

const oficio = mongoose.model<any>('oficios', oficioSchema);

export { oficioSchema, oficio };
