
const createOficio = {
    description: 'Rota para criar um oficio.',
    body: {
    type: 'object',
    reqired: ['email', 'rg', ] ,
    properties: {
        email: { type: 'string'},
        nome: {type: 'string'},
        rg: {type: 'string'},
        cpf: {type: 'string'},
        dataNascimento: { type: 'string', description: 'Tipo Date, schema não reconhece date'},
        nacionalidade : {type: 'string'},
        estadoCivil: {type: 'string',enum: ['solteiro','casado', 'divorciado', 'viuvo'] },
        filhos: {
            type: 'string',
            possuiFilho: {type: 'boolean' , description: "Possui Filho , true / false"},
            filho: { type: 'array',  nome: { type: 'string'}, idade: {type: 'number'} }
        },
        contato: {
            type: 'string',
            cep: { type: 'Number' , description: 'CEP' },
            endereco: { type: 'string', description: 'Endereço'},
            complemento: {type : 'string' , description: 'Numero Completo'},
            bairro: {type: 'string', description: 'Bairro'},
            cidade: {type: 'string', description: 'Cidade'},
            estado: {type: 'string', description: 'Estado'},
            horarioDeContato: {type: 'string', enum: ['manha','tarde', 'noite'] },
            telefone: {
                type: 'array',
                numero: {type: 'string', description: 'Numero de contato'},
                recado: {type: 'boolean', description: 'Numero de recado true / false'}
            },
            email: {type: 'string', description: 'Email'}      
         },
        }
    }
  }

  export { createOficio }