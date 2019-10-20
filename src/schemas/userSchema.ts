const createUser = {
    description: 'Rota para criar um oficio.',
    body: {
    type: 'object',
    properties: {
      nome: {type: 'string'},
      email: {type: 'string'},
      senha: {type: 'string'},
        }
    }
}


export { createUser }