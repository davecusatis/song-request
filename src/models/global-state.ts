import { PlaylistState } from '../reducers/playlist';
import { ContextState } from '../reducers/context';
import { SessionState } from '../reducers/session';

export interface GlobalState {
  playlist: PlaylistState;
  context: ContextState;
  session: SessionState;
}
