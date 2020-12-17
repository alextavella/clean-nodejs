import { RankingScoreModel } from '@/domain/models'

export interface ILastRankingLoader {
  load: () => Promise<LastRankingLoader.Result>
}

export namespace LastRankingLoader {
  export type Params = {}
  export type Result = RankingScoreModel[]
}
