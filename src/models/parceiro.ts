import mongoose from 'mongoose';

const parceiroSchema = new mongoose.Schema({
    nomeEmpresa: {type: String, require: true},
    codigo: {type: String, require: true},
    cnpj: {type: String, required:true},
    areaAtuacao: {type: String},
    responsavel: {type: String},
    contato: {
        cep: { type: String, require: true},
        endereco: { type: String, require: true},
        complemento: {type : String, require: true},
        bairro: {type: String, require: true},
        cidade: {type: String, require: true},
        estado: {type: String, require: true},
        horarioDeContato: {type: String, enum: ['manha','tarde', 'noite']},
        telefone: {
            numero: {type: String, require: true},
            obs: {type: String, require: true}
        },
      email: [String]     
    },
  });
  
  const parceiro = mongoose.model<any>('parceiros', parceiroSchema);
  
  export { parceiroSchema, parceiro };