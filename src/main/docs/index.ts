import components from './components'
import paths from './paths'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Architecture with Node.js',
    description:
      'Essa é a documentação da API NodeJs usando Typescript, TDD, Clean Architecture e seguindo os princípios do SOLID e Design Patterns.',
    version: '1.0.0',
    contact: {
      name: 'Alex Tavella',
      email: 'alextavella@outlook.com',
      url: 'https://www.linkedin.com/in/alextavella',
    },
  },
  servers: [
    {
      url: '/api',
      description: 'Servidor Principal',
    },
  ],
  tags: [
    {
      name: 'Rankings',
      description: 'APIs relacionadas a Ranking',
    },
  ],
  paths,
  schemas,
  components,
}
