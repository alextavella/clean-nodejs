import { Controller } from '@/presentation/contracts/controller'

export const adaptResolver = async (controller: Controller) => {
  const response = await controller.handle()
  return response.data
}
