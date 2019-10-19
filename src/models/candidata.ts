import mongooose from mongoose;

const candidataSchema = new mongoose.Schema({
    nome: {type: String, require: true},
    rg: {type: String, require: true},
    cpf: {type: String, require: true},
    nascimento: {type: Date, require: true},
    nacionalidade: {type: String, require: true},
    estadoCivil: {type: String, enum: ['',''] , default: '', require: true },
    filhos: Number,
    qtoFilhos: {type: Number},
    contato: {
        cep: { type: String, require: true},
        endereco: { type: String, require: true},
        complemento: {type : String, require: true},
        bairro: {type: String, require: true},
        cidade: {type: String, require: true},
        estado: {type: String, require: true},
        horarioDeContato: {type: String, enum: ['',''], default: '', require: true},
        telefone: {
            numero: {type: String, require: true},
            recado: {type: Boolean, require: true}
        },
      email: {type: String, lowercase: true, require: true}      
    },
    cursos: {
        escolaridade: {type: String, require: true},
        curso: {type: String},
        local: {type: String},
        periodo: {type: String},
        habilidades: {type: String}
    },
    experienciaProfissional: {
        empresa: {type: String},
        cargo: {type: String},
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
  
  const candidata = mongoose.model<any>('candidatas', candidataSchema);
  
  export { candidataSchema, candidata };
  