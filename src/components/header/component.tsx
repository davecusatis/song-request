import * as React from 'react';
import { Song } from '../../models/song';

export interface HeaderProps {
  nowPlaying?: Song;
}

export class Header extends React.Component<HeaderProps>{
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      nowPlaying: this.props.nowPlaying,
    };
  }

  public render() {
    return (
      <div>
        Song Request
        {this.props.nowPlaying &&
          <div>
            Now playing: {this.props.nowPlaying.title}
          </div>
        }
      </div>
    );
  }
}
