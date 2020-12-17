import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import { resolve, basename } from 'path'

export const setupRoutes = (app: Express) => {
  const router = Router()

  app.use('/api', router)

  readdirSync(resolve(__dirname, '..', 'routes')).map(async (fileName) => {
    const filename = basename(`../routes/${fileName}`, '.ts')
    const innerRouter = Router()
    router.use(`/${filename}`, innerRouter)
    ;(await import(`../routes/${fileName}`)).default(innerRouter)
  })
}
