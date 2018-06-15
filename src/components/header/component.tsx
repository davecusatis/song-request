import * as React from 'react';
import * as classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Song } from '../../models/song';
import './component.scss';

const PLAYLIST = 'playlist';
const SONGLIST = 'songlist';

export interface PublicProps {
  page: string;
}
export interface HeaderState {
  nowPlaying: Song;
  selected: string;
}

export interface ReduxStateProps {
  playlist?: Song[];
}

type Props = ReduxStateProps & PublicProps;

export class HeaderComponent extends React.Component<Props, HeaderState>{
  constructor(props: PublicProps) {
    console.log(props);
    super(props);
    this.state = {
      nowPlaying: null,
      selected: PLAYLIST
    };
  }

  private onClick(selection: string):void {
    this.setState({
      selected: selection,
    })
  }
  public render() {
    const playlistClasses = classNames({
      'header-tab': true,
      'selected': this.props.page === PLAYLIST,
    });
    const songlistClasses = classNames({
      'header-tab': true,
      'selected': this.props.page === SONGLIST,
    });
    return (
      <div className='header_container'>
        <div className='header_title_container'>
          <div className='header_title'>Song Request</div>
          {this.renderNowPlaying()}
        </div>
          <div className='header-tabs_container'>
            <div>
              <Link onClick={() => { this.onClick(PLAYLIST) }} className={playlistClasses} to="/playlist">Playlist</Link>
              {this.props.page === PLAYLIST && <div className='header-tab_selected'/>}
            </div>
            <div>
              <Link onClick={() => { this.onClick(SONGLIST) }} className={songlistClasses} to="/songlist">Songlist</Link>
              {this.props.page === SONGLIST && <div className='header-tab_selected'/>}
            </div>
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
