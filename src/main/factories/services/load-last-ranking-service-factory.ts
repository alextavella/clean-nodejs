import { LoadLastRankingService } from '@/data/services'
import { ILastRankingLoader } from '@/domain/usecases'
import { FakeRankingRepository } from '@/infra/tech/repositories/fakes'

export const makeLoadLastRankingService = (): ILastRankingLoader => {
  const repo = new FakeRankingRepository()
  return new LoadLastRankingService(repo)
}
