export type RankingScoreModel = {
  player: PlayerModel
  score: number
  matchDate: Date
  heroes: HeroModel[]
}

type PlayerModel = {
  name: string
  country: string
}

type HeroModel = {
  name: string
  level: number
}
