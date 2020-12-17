import { RankingScoreEntity } from '@/data/entities'

export interface ILoadLastRankingRepository {
  loadLastRanking: () => Promise<RankingScoreEntity[]>
}
