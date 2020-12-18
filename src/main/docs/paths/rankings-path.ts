export const rankingsPath = {
  get: {
    tags: ['Ranking'],
    summary: 'API Ranking',
    description: 'Essa rota pode ser executada por **qualquer usuário**',
    requestBody: null,
    // requestBody: {
    //   required: true,
    //   content: {
    //     'application/json': {
    //       schema: {
    //         $ref: '#/schemas/rankings',
    //       },
    //     },
    //   },
    // },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/rankings',
            },
          },
        },
      },
      400: {
        $ref: '#/components/badRequest',
      },
      401: {
        $ref: '#/components/unauthorized',
      },
      404: {
        $ref: '#/components/notFound',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
}
