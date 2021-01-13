import { adaptRoute } from '@/main/adapters'
import { makeLoadLastRankingController } from '@/main/factories'
import { Router } from 'express'

export default (router: Router) => {
  router.get('/', (_req, res) => res.send('ok'))
  router.get('/last', adaptRoute(makeLoadLastRankingController()))
}
