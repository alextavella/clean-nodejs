import { ILastRankingLoader } from '@/domain/usecases'
import { HttpResponse } from '@/presentation/contracts'
import { Controller } from '@/presentation/contracts/controller'
import { ok, serverError } from '@/presentation/helpers'
import { RankingScoreViewModel } from '@/presentation/view-models'

export class LoadLastRankingController implements Controller {
  constructor(private readonly lastRankingLoader: ILastRankingLoader) {}

  async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const rankings = await this.lastRankingLoader.load()

      return ok(RankingScoreViewModel.mapCollection(rankings))
    } catch (error) {
      return serverError(error)
    }
  }
}
