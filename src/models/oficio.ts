import mongoose from 'mongoose';

const oficioSchema = new mongoose.Schema({
  nome: {type: String},
  rg: {type: String},
  nascimento: {type: Date},
  cpf: {type: String},
  estadoCivil: {type: String, enum: ['',''] , default: '' },
  filhos: Number,
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
