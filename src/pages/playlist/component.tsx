import * as React from 'react';
import { RouteComponentProps, Switch, Redirect} from 'react-router-dom';
import { Song } from '../../models/song';
import { Header, HeaderProps } from '../../components/header';
import { Context } from '../../models/context';
import { Session } from '../../models/session';

interface State {
  playlist: Song[];
}
export interface PublicProps {}
export type RouteProps = RouteComponentProps<{}>;
export interface ReduxStateProps {
  playlist?: Song[];
  context?: Context;
  session?: Session;
}

type Props = PublicProps & ReduxStateProps & RouteProps;
export class PlaylistPageComponent extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      playlist: null
    }
  }
  public render() {
    const { session, playlist, context } = this.props;
    const channel = session && session.channelId;

    if(context && context.mode === "config") {
      console.log(context);
      return (<Redirect to='/config' />);
    }

    if(context && context.mode === "dashboard") {
      console.log(context);
      return (<Redirect to='/dashboard' />);
    }

    return (
      <div>
        <Header playlist={playlist}/>
        {playlist ? this.renderPlaylist() : this.renderLoading(channel)}
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
        <div key={index}>
          {song.title} - {song.artist}, {song.genre}, {song.game}
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
