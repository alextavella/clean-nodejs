import { adaptRoute } from '@/main/adapters'
import { makeLoadLastRankingController } from '@/main/factories'
import { Router } from 'express'

export default (router: Router) => {
  router.get('/last', adaptRoute(makeLoadLastRankingController()))
}
