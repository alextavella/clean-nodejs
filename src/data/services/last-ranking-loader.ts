import { ILoadLastRankingRepository } from '@/data/contracts'
import { RankingScore } from '@/domain/entities'
import { RankingUnavailableError } from '@/domain/errors'
import { ILastRankingLoader } from '@/domain/usecases'

export class LastRankingLoaderService implements ILastRankingLoader {
  constructor(
    private readonly loadLastRankingRepository: ILoadLastRankingRepository,
  ) {}

  async load(): Promise<RankingScore[]> {
    if (new Date().getHours() > 22) {
      throw new RankingUnavailableError()
    }

    return this.loadLastRankingRepository.loadLastRanking()
  }
}
