import { ILoadLastRankingRepository } from '@/data/contracts'
import { RankingUnavailableError } from '@/domain/errors'
import { RankingScoreModel } from '@/domain/models'
import { ILastRankingLoader } from '@/domain/usecases'

export class LoadLastRankingService implements ILastRankingLoader {
  constructor(
    private readonly loadLastRankingRepository: ILoadLastRankingRepository,
  ) {}

  async load(): Promise<RankingScoreModel[]> {
    if (new Date().getHours() > 22) {
      throw new RankingUnavailableError()
    }

    const response = await this.loadLastRankingRepository.loadLastRanking()

    return response as RankingScoreModel[]
  }
}
