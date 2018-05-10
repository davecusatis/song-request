import * as React from 'react';
import { RouteComponentProps, Switch, Redirect} from 'react-router-dom';
import { Song } from '../../models/song';
import { Header, HeaderProps } from '../../components/header';
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
    const { session } = this.props;
    const channel = session && session.channelId;

    return (
      <div>
        <Header playlist={this.props.playlist}/>
        {this.props.playlist ? this.renderPlaylist() : this.renderLoading(channel)}
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
          <div key={index}>
            {song.title} - {song.artist}, {song.genre}, {song.game}
          </div>
        </div>
      );
    });
  }

  private renderLoading(channelId: string): JSX.Element{
    return (
      <div>
        Loading {channelId} playlist...
      </div>
    );
  }
}
