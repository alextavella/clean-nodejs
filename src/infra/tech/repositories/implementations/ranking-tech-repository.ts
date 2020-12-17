import { ILoadLastRankingRepository } from '@/data/contracts'
import { RankingScoreEntity } from '@/data/entities'

export class RankingTechRepository implements ILoadLastRankingRepository {
  async loadLastRanking(): Promise<RankingScoreEntity[]> {
    throw new Error('No implementation!')
  }
}
