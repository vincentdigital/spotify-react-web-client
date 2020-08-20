import { schema } from 'nexus'

schema.queryType({
  definition(t) {
    t.crud.blogs({
      pagination: false,
    })
    t.crud.users({ filtering: true, alias: 'people' })
    t.crud.posts({ type: 'CustomPost', ordering: true, filtering: true })

    //
    // Examples showing custom resolvers
    //

    t.field('blog', {
      type: 'Blog',
      args: {
        id: schema.intArg({ required: true }),
      },
      resolve(_root, args, ctx) {
        return ctx.db.blog.findOne({
          where: {
            id: args.id,
          },
        })
      },
    })

    t.field('blogsLike', {
      type: 'Blog',
      list: true,
      args: {
        name: schema.stringArg(),
        viewCount: schema.intArg(),
      },
      resolve(_root, args, ctx) {
        return ctx.db.blog.findMany({
          where: {
            name: args.name ?? undefined,
            viewCount: args.viewCount ?? undefined,
          },
        })
      },
    })
  },
})
