export const heroSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    level: {
      type: 'number',
    },
  },
}

export const rankingSchema = {
  type: 'object',
  properties: {
    player: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        country: {
          type: 'string',
        },
      },
    },
    score: {
      type: 'string',
    },
    matchDate: {
      type: 'string',
    },
    heroes: {
      type: 'array',
      items: {
        $ref: '#/schemas/hero',
      },
    },
  },
  required: ['player', 'score', 'matchDate', 'heroes'],
}

export const rankingsSchema = {
  type: 'array',
  items: {
    $ref: '#/schemas/ranking',
  },
}
