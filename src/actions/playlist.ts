import { Action } from '../models/actions';
import { Song } from '../models/song';
import { PlaylistAPI } from '../api/playlist';

export const PLAYLIST_UPDATED = 'core.playlist.updated';
export const UPDATE_PLAYLIST = 'core.playlist.update';
export const SKIP_SONG = 'core.playlist.skipSong';
export const DELETE_SONG = 'core.playlist.deleteSong';

interface PlaylistUpdated extends Action<typeof PLAYLIST_UPDATED> {
  playlist: Song[];
}

interface UpdatePlaylist extends Action<typeof UPDATE_PLAYLIST> {}
interface SkipSong extends Action<typeof SKIP_SONG> {}
interface DeleteSong extends Action<typeof DELETE_SONG> {}

export type All = (
  | PlaylistUpdated
  | UpdatePlaylist
);

export function playlistUpdated(playlist: Song[]): PlaylistUpdated {
  return {
    type: PLAYLIST_UPDATED,
    playlist
  };
}

export function updatePlaylist(jwt: string): UpdatePlaylist {
  const api = new PlaylistAPI();
  api.getPlaylist(jwt);
  return {
    type: UPDATE_PLAYLIST,
  }
}

export function skipSong(jwt: string): SkipSong {
  const api = new PlaylistAPI();
  api.skipSong(jwt);
  return {
    type: SKIP_SONG,
  }
}

export function deleteSong(jwt: string, song: Song): DeleteSong {
  const api = new PlaylistAPI();
  api.deleteSong(jwt, song);
  return {
    type: DELETE_SONG,
  }
}
