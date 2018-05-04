import { Song } from '../models/song';
import * as playlistActions from '../actions/playlist';
import { GlobalState } from '../models/global-state';

export interface PlaylistState {
  playlistReceived: boolean;
  currentPlaylist?: Song[];
}

export const getInitialState = (): PlaylistState => ({
  playlistReceived: false,
});

export function playlistReducer(state = getInitialState(), action: playlistActions.All): PlaylistState {
  switch(action.type) {
    case playlistActions.PLAYLIST_UPDATED:
      return {
        ...state,
        playlistReceived: true,
        currentPlaylist: action.playlist,
      };
    default:
      return state;
  }
}

export function getPlaylist(state: GlobalState){
  return state.playlist;
}

