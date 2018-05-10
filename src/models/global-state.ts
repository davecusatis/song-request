import { PlaylistState } from '../reducers/playlist';
import { ContextState } from '../reducers/context';
import { SessionState } from '../reducers/session';
import { SonglistState } from '../reducers/songlist';

export interface GlobalState {
  playlist: PlaylistState;
  songlist: SonglistState;
  context: ContextState;
  session: SessionState;
}
