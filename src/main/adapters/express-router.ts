import { Controller } from '@/presentation/contracts/controller'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const response = await controller.handle()
    return res.status(response.statusCode).json(response.data)
  }
}
