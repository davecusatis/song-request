import * as React from 'react';
import { RouteComponentProps, Switch, Redirect} from 'react-router-dom';
import { Song } from '../../models/song';
import { Header } from '../../components/header';
import { Context } from '../../models/context';
import { Session } from '../../models/session';
import { Playlist } from '../../components/playlist';

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
      return (<Redirect to='/config' />);
    }

    if(context && context.mode === "dashboard") {
      return (<Redirect to='/dashboard' />);
    }

    return (
      <div>
        <Header/>
        <Playlist
          editable={false}
          channel={channel}/>
      </div>
    );
  }
}
