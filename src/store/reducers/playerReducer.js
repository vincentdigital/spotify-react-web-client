import { gqlClient } from '../../gqlClient'
import { gql, useMutation } from '@apollo/client';

// const ADD_TODO = ;

export const playerReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_SONG':
      // console.log('test');
      // const [addTodo, { data }] = useMutation(ADD_TODO);
      // addTodo();

      console.log(state);
      gqlClient.mutate({
        variables: {
          spotifyId: state.status.track_window.current_track.id,
          title: state.status.track_window.current_track.name,
          duration: state.status.track_window.current_track.duration_ms
        },
        mutation: gql`
          mutation upsertOneSpotifyTrack(
            $spotifyId: String!,
            $title: String!,
            $duration: Int!
          ) {
            upsertOneSpotifyTrack(
              create: {
                spotifyId: $spotifyId,
                title: $title,
                duration: $duration
              },
              update: {
                spotifyId: $spotifyId,
                title: $title,
                duration: $duration
              },
              where: {
                spotifyId: $spotifyId
              }
            ) {
              id
              title
              duration
            }
          },
        `
      })
      
      return {
        ...state,
        status: action.status
      };
    case 'FETCH_STATUS_SUCCESS':
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};

export default playerReducer;
