import { schema } from 'nexus'

schema.objectType({
  name: 'CustomPost',
  definition(t) {
    t.model('Post').id()
    t.model('Post').title()
    t.model('Post').tags()
    t.model('Post').status()
  },
})
