import { Action } from '../models/actions';
import { Song } from '../models/song';
import { PlaylistAPI } from '../api/playlist';

export const SONGLIST_UPDATED = 'core.Songlist.updated';
export const UPDATE_SONGLIST = 'core.Songlist.update';

export type All = (
  | SonglistUpdated
  | UpdateSonglist
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
