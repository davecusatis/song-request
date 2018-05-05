import * as React from 'react';
import { RouteComponentProps, Switch, Redirect} from 'react-router-dom';
import { PlaylistState } from '../../reducers/playlist';
import { Song } from '../../models/song';
import { Header } from '../../components/header';
import { ContextState } from '../../reducers/context';
import { SessionState} from '../../reducers/session';

interface State {}
export interface PublicProps {}
export type RouteProps = RouteComponentProps<{}>;
export interface ReduxStateProps {
  playlist?: PlaylistState;
  context?: ContextState;
  session?: SessionState;
}

type Props = PublicProps & ReduxStateProps & RouteProps;
export class PlaylistPageComponent extends React.Component<Props, State> {
  public render() {
    return (
      <div>
        <Header />
        {this.props.playlist ? this.renderPlaylist() : this.renderLoading()}
      </div>
    );
  }

  private renderPlaylist(): JSX.Element[]{
    const { playlist } = this.props;
    if (playlist === undefined) {
      return null;
    }

    return playlist.currentPlaylist.map((song: Song, index: number): JSX.Element => {
      return(
        <div>
          {song.title} - {song.artist}, {song.genre}, {song.game}
        </div>
      );
    });
  }

  private renderLoading(): JSX.Element{
    return (
      <div>
        {this.props.context}
        {this.props.session}
      </div>
    );
  }
}
