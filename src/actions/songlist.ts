import { Action } from '../models/actions';
import { Song } from '../models/song';
import { PlaylistAPI } from '../api/playlist';

export const SONGLIST_UPDATED = 'core.Songlist.updated';
export const UPDATE_SONGLIST = 'core.Songlist.update';
export const SAVE_SONGLIST = 'core.Songlist.save';

export type All = (
  | SonglistUpdated
  | UpdateSonglist
  | SaveSonglist
);

interface SonglistUpdated extends Action<typeof SONGLIST_UPDATED> {
  songlist: Song[];
}


export function songlistUpdated(songlist: Song[]): SonglistUpdated {
  return {
    type: SONGLIST_UPDATED,
    songlist
  };
}

interface UpdateSonglist extends Action<typeof UPDATE_SONGLIST> {}

export function updateSonglist(jwt: string): UpdateSonglist {
  const api = new PlaylistAPI();
  api.getSonglist(jwt);
  return {
    type: UPDATE_SONGLIST
  }
}


interface SaveSonglist extends Action<typeof SAVE_SONGLIST> {
  songlist: Song[];
}

export function saveSonglist(jwt: string, songlist: Song[]): SaveSonglist {
  const api = new PlaylistAPI();
  api.postSonglist(jwt, JSON.stringify(songlist));
  return {
    type: SAVE_SONGLIST,
    songlist
  }
}
