import { LastRankingLoaderService } from '@/data/services'
import { FakeRankingRepository } from '@/infra/repositories/fakes'
import { Controller } from '@/presentation/contracts'
import { LoadLastRankingController } from '@/presentation/controllers'

export const makeLoadLastRankingController = (): Controller => {
  const repo = new FakeRankingRepository()
  const service = new LastRankingLoaderService(repo)
  return new LoadLastRankingController(service)
}
