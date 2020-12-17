import { makeLoadLastRankingService } from '@/main/factories/services'
import { Controller } from '@/presentation/contracts'
import { LoadLastRankingController } from '@/presentation/controllers'

export const makeLoadLastRankingController = (): Controller =>
  new LoadLastRankingController(makeLoadLastRankingService())
