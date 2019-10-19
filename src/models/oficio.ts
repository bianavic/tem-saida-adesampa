import mongoose from 'mongoose';

const oficioSchema = new mongoose.Schema({
  nome: {type: String, required: true},
  rg: {type: String, required: true, unique: true},
  cpf: {type: String, required: true, unique: true},
  dataNascimento: {type: Date,},
  nacionalidade : {type: String},
  estadoCivil: {type: String, enum: ['',''] , default: '' },
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
      horarioDeContato: {type: String, enum: ['',''], default: ''},
      telefone: {
          numero: {type: String},
          recado: {type: Boolean}
      },
    email: {type: String}      
  }
});

const oficio = mongoose.model<any>('oficios', oficioSchema);

export { oficioSchema, oficio };
