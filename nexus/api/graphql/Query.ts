import { schema } from 'nexus'

schema.queryType({
  definition(t) {
    t.crud.spotifyTracks({
      type: 'SpotifyTrack'
    })
  }
})
