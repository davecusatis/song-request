import { Action } from '../models/actions';
import { Song } from '../models/song';

export const PLAYLIST_UPDATED = 'core.playlist.updated';

interface PlaylistUpdated extends Action<typeof PLAYLIST_UPDATED> {
  playlist: Song[];
}

export type All = (
  | PlaylistUpdated
);

export function playlistUpdated(playlist: Song[]): PlaylistUpdated {
  return {
    type: PLAYLIST_UPDATED,
    playlist
  };
}
