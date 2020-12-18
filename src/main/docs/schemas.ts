import { errorSchema, rankingSchema, rankingsSchema } from './schemas/'
import { heroSchema } from './schemas/ranking-schema'

export default {
  error: errorSchema,
  hero: heroSchema,
  ranking: rankingSchema,
  rankings: rankingsSchema,
}
