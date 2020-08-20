import { log, settings, use, server } from 'nexus'
import { prisma } from 'nexus-plugin-prisma'
import cors from 'cors'

use(prisma({ features: { crud: true } }))

server.express.use(cors())

// server.express.use(cors())
settings.change({
  schema: {
    connections: {
      foobar: {},
      toto: {},
    },
  },
  server: {
    port: 4001,
    
    startMessage: (info) => {
      settings.original.server.startMessage(info)
      log.warn('piggy back message!')
    },
  },
})
