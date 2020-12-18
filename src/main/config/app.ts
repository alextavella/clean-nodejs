import { setupApolloServer } from '@/main/config/apollo-server'
import { setupRoutes } from '@/main/config/routes'
import { setupSwagger } from '@/main/config/swagger'
import express from 'express'

const app = express()

setupRoutes(app)
setupApolloServer(app)
setupSwagger(app)

export default app
