import * as React from 'react';
import { Link } from 'react-router-dom';
import { Song } from '../../models/song';
import './component.sass';

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
      <div className='header_container'>
        <div className='header_title_container'>
          <div className='header_title'>Song Request</div>
          {this.renderNowPlaying()}
        </div>
          <div className='header-tabs_container'>
            <Link className='header-tab' to="/playlist">Playlist</Link>
            <Link className='header-tab' to="/songlist">Songlist</Link>
          </div>
      </div>
    );
  }

  private renderNowPlaying(): JSX.Element{
    const { playlist } = this.props;
    if(playlist && playlist.length > 0){
      return (
        <div className='header-now-playing'>
          NOW PLAYING: {playlist[0].title}
        </div>
      );
    }
    return null;
  }
}
