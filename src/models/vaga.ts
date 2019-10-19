import mongooose from mongoose;

const vagaSchema = new mongoose.Schema({
    empresa: {type: String, require: true},
    codigo: {type: String, require: true},
    data: {type: Date, default: Date.now()},
    cargol: {type: String, require: true},
    descricao: { 
        periodo: {type: String}
    },
    percepcaoAtendimento: {
        fisico: {type: String},
        psicologico: {type: String},
        outros: {type: String}
    },
    encaminhamentos: {
        servico: {type: String},
        data: {type: Date, default: Date.now()}
    },
  });
  
  const vaga = mongoose.model<any>('vagas', vagaSchema);
  
  export { vagaSchema, vaga };