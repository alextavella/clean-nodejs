import { ILastRankingLoader } from '@/domain/usecases'
import { Controller } from '@/presentation/contracts/controller'
import { HttpResponse, ok, serverError } from '@/presentation/contracts/http'
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
