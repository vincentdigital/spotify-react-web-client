import { schema } from 'nexus'

schema.objectType({
  name: 'SpotifyTrack',
  definition(t) {
    t.model.id()
    t.model.spotifyId()
    t.model.title()
    t.model.duration()
  }
})
