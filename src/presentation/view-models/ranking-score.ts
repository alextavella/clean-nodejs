import { RankingScore } from '@/domain/entities'

export class RankingScoreViewModel {
  player!: Player
  score!: number
  matchDate!: string
  heroes!: Hero[]

  static map(entity: RankingScore): RankingScoreViewModel {
    return {
      ...entity,
      matchDate: entity.matchDate.toISOString(),
    }
  }

  static mapCollection(entities: RankingScore[]): RankingScoreViewModel[] {
    return entities.map(RankingScoreViewModel.map)
  }
}

type Player = {
  name: string
  country: string
}

type Hero = {
  name: string
  level: number
}
