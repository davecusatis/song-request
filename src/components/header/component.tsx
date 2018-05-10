import * as React from 'react';
import { Link } from 'react-router-dom';
import { Song } from '../../models/song';

export interface HeaderProps {
  playlist?: Song[];
}

export interface HeaderState {
  playlist?: Song[];
  nowPlaying: Song;
}
export class Header extends React.Component<HeaderProps, HeaderState>{
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      playlist: this.props.playlist,
      nowPlaying: this.nowPlaying(),
    };
  }
  private nowPlaying(): Song {
    if (this.props.playlist && (this.props.playlist.length > 0)) {
      return this.props.playlist[0]
    }
    return null
  }

  public render() {
    return (
      <div>
        Song Request
        {this.state.nowPlaying &&
          <div>
            Now playing: {this.state.nowPlaying.title}
          </div>}

          <div>
            <Link to="/playlist"> Playlist </Link>
            <Link to="/songlist"> Songlist </Link>
          </div>
      </div>
    );
  }
}
