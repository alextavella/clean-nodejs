import { ILoadLastRankingRepository } from '@/data/contracts'
import { LoadLastRankingService } from '@/data/services'
import { ILastRankingLoader } from '@/domain/usecases'
import { FakeRankingRepository } from '@/infra/tech/repositories/fakes'

let loadLastRankingsRepo: ILoadLastRankingRepository
let loadLastRankingService: ILastRankingLoader

describe('LoadLastRankingService', () => {
  beforeAll(() => {
    loadLastRankingsRepo = new FakeRankingRepository()
    loadLastRankingService = new LoadLastRankingService(loadLastRankingsRepo)
  })

  it('should to be able to load last rankings', async () => {
    const rankings = await loadLastRankingService.load()

    expect(rankings.length).toBe(1)
  })
})
