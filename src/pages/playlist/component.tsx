import * as React from 'react';
import { RouteComponentProps, Switch, Redirect} from 'react-router-dom';
import { Song } from '../../models/song';
import { Header } from '../../components/header';
import { Context } from '../../models/context';
import { Session } from '../../models/session';

interface State {}
export interface PublicProps {}
export type RouteProps = RouteComponentProps<{}>;
export interface ReduxStateProps {
  playlist?: Song[];
  context?: Context;
  session?: Session;
}

type Props = PublicProps & ReduxStateProps & RouteProps;
export class PlaylistPageComponent extends React.Component<Props, State> {
  public render() {
    console.log('rendering', this.props);
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

    return playlist.map((song: Song, index: number): JSX.Element => {
      return(
        <div>
          {song.title} - {song.artist}, {song.genre}, {song.game}
        </div>
      );
    });
  }

  private renderLoading(): JSX.Element{
    const { context, session } = this.props;
    return (
      <div>
        Loading playlist
      </div>
    );
  }
}
