import { ILoadLastRankingRepository } from '@/data/contracts'
import { RankingScoreModel } from '@/data/models'
import { ranking } from '@/infra/data-sources'

export class FakeRankingRepository implements ILoadLastRankingRepository {
  async loadLastRanking(): Promise<RankingScoreModel[]> {
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
