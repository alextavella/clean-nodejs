import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import { resolve } from 'path'

export const setupRoutes = (app: Express) => {
  const router = Router()
  const extensions = 'js|ts'

  app.use('/api', router)

  readdirSync(resolve(__dirname, '..', 'routes'))
    .filter((fileName) => fileName.match(new RegExp(`.*\.(${extensions})$`)))
    .map(async (fileName) => {
      const [_, filename] = fileName.match(new RegExp(`(.*)\.(${extensions})$`))
      const innerRouter = Router()
      router.use(`/${filename}`, innerRouter)
      ;(await import(`../routes/${fileName}`)).default(innerRouter)
    })
}
