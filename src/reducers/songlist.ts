import { Song } from '../models/song';
import * as songlistAction from '../actions/songlist';
import { GlobalState } from '../models/global-state';

export interface SonglistState {
  songlistReceived: boolean;
  songlist?: Song[];
}

export const getInitialState = (): SonglistState => ({
  songlistReceived: false,
});

export function songlistReducer(state = getInitialState(), action: songlistAction.All): SonglistState {
  switch(action.type) {
    case songlistAction.SONGLIST_UPDATED:
      return {
        ...state,
        songlistReceived: true,
        songlist: action.songlist,
      };
    default:
      return state;
  }
}

export function getSonglist(state: GlobalState): Song[] {
  return state.songlist && state.songlist.songlist;
}

