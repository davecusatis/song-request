import * as React from 'react';
import { RouteComponentProps, Switch, Redirect} from 'react-router-dom';
import { Song } from '../../models/song';
import { Header } from '../../components/header';
import { Context } from '../../models/context';
import { Session } from '../../models/session';
import { Search } from '../../components/search';
import { app }  from '../../app/app';
import * as playlistActions from '../../actions/playlist';

interface State {
  songlist?: Song[];
}
export interface PublicProps {}
export type RouteProps = RouteComponentProps<{}>;
export interface ReduxStateProps {
  playlist?: Song[];
  songlist?: Song[];
  context?: Context;
  session?: Session;
}

type Props = PublicProps & ReduxStateProps & RouteProps;
export class SearchPageComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      songlist: this.props.songlist,
    }
  }
  public render() {
    const { session } = this.props;
    const channel = session && session.channelId;

    return (
      <div>
        <Header/>
        {this.state.songlist ? this.renderSonglist() : this.renderLoading(channel)}
      </div>
    );
  }

  private renderSonglist(): JSX.Element{
    const { songlist } = this.props;
    if (songlist === undefined) {
      return null;
    }

    return (
      <Search
        addSong={(song: Song)=> { 
          console.log(song);
          app.store.dispatch(playlistActions.addSong(this.props.session.token, song));
        }}/>
    );
  }

  private renderLoading(channelId: string): JSX.Element{
    return (
      <div>
        Loading {channelId} songlist...
      </div>
    );
  }
}
