import * as React from 'react';
import { RouteComponentProps, Switch, Redirect} from 'react-router-dom';
import { Song } from '../../models/song';
import { Header, HeaderProps } from '../../components/header';
import { Context } from '../../models/context';
import { Session } from '../../models/session';
import { Search } from '../../components/search';

interface State {}
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
  public render() {
    const { session } = this.props;
    const channel = session && session.channelId;

    return (
      <div>
        <Header playlist={this.props.playlist}/>
        {this.props.playlist ? this.renderSonglist() : this.renderLoading(channel)}
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
        addSong={(song: Song)=> {}}
        songlist={this.props.songlist}/>
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
