import { ILoadLastRankingRepository } from '@/data/contracts'
import { RankingScoreEntity } from '@/data/entities'
import { ranking } from '@/infra/tech/data-sources'

export class FakeRankingRepository implements ILoadLastRankingRepository {
  async loadLastRanking(): Promise<RankingScoreEntity[]> {
    return ranking.map((item) => ({
      player: {
        name: item.user.name,
        country: item.user.country,
      },
      score: item.score,
      matchDate: new Date(item.date),
      heroes: item.heroes,
    }))
  }
}
