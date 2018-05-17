import * as React from 'react';
import { Link } from 'react-router-dom';
import { Song } from '../../models/song';

export interface PublicProps {}
export interface HeaderState {
  nowPlaying: Song;
}

export interface ReduxStateProps {
  playlist?: Song[];
}

type Props = ReduxStateProps & PublicProps;

export class HeaderComponent extends React.Component<Props, HeaderState>{
  constructor(props: PublicProps) {
    super(props);
    this.state = {
      nowPlaying: null,
    };
  }

  public render() {
    return (
      <div>
        Song Request
        {this.renderNowPlaying()}
          <div>
            <Link to="/playlist"> Playlist </Link>
            <Link to="/songlist"> Songlist </Link>
          </div>
      </div>
    );
  }

  private renderNowPlaying(): JSX.Element{
    const { playlist } = this.props;
    if(playlist && playlist.length > 0){
      return (
        <div>
          Now playing: {playlist[0].title}
        </div>
      );
    }
    return null;
  }
}
