import mongoose from 'mongoose';

const vagaSchema = new mongoose.Schema({
    nomeEmpresa: {type: String, require: true},
    codigoVaga: {type: String, require: true},
    dataCadastro: {type: Date},
    cargo: {type: String, require: true},
    descricao:  { type: String },
    remuneracao: {type: Number},
    cargaHoraria: {type: String, enum: ['44 semanais','40 semanais']},
    beneficios: {type: String, enum: ['vale transporte', 'vale refeição', 'plano de saude']},
    localTrabalho: {type: String}
  });
  
  const vaga = mongoose.model<any>('vagas', vagaSchema);
  
  export { vagaSchema, vaga };