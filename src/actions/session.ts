import { Action } from '../models/actions';
import { Song } from '../models/song';
import { Session } from '../models/session';

export const ON_AUTHORIZED = 'core.onAuthorized';

interface onAuthorizedSession extends Action<typeof ON_AUTHORIZED> {
  session: Session;
}

export type All = (
  | onAuthorizedSession
);

export function onAuthorized(session: Session): onAuthorizedSession {
  return {
    type: ON_AUTHORIZED,
    session
  };
}
