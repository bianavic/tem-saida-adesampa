import mongoose from 'mongoose';

const candidataSchema = new mongoose.Schema({
    nome: {type: String, require: true},
    rg: {type: String, require: true},
    cpf: {type: String, require: true},
    dataNascimento: {type: Date, require: true},
    nacionalidade: {type: String, require: true},
    estadoCivil: {type: String, enum: ['Solteiro','Casado', 'Divorciado', 'Viuvo']},
    filhos: {
        possuiFilho: {type: Boolean},
        quantity: {type: Number}
      },
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
            recado: {type: Boolean, require: true}
        },
      email: {type: String, lowercase: true, require: true}      
    },
    cursos: {
        escolaridade: {type: String, require: true},
        curso: {type: String},
        local: {type: String},
        periodo: {type: String},
        habilidades: [String]
    },
    experienciaProfissional: {
        empresa: {type: String},
        cargo: {type: String},
        periodo: {type: String}
    },
    percepcaoAtendimento: {
        fisico: [String],
        psicologico: [String],
        outros: [String]
    },
    encaminhamentos: {
        servico: {type: String, enum: ['elaboracao de curriculo', 'orientacao para processo seletivo', 'orientacao psicológica']},
        data: {type: Date, default: Date.now()}
    },
    createdAt: { type: Date, default: Date.now }
  });
  
  const candidata = mongoose.model<any>('candidatas', candidataSchema);
  
  export { candidataSchema, candidata };
  