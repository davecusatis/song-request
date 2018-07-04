import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Song } from '../../models/song';
import './component.sass';

interface State {
  searchText: string;
}

export interface PublicProps {
  addSong(song: Song): void;
}
export interface ReduxStateProps {
  songlist?: Song[];
  playlist?: Song[];
}

type Props = PublicProps & ReduxStateProps;
export class SearchComponent extends React.Component<Props, State> {
  private btn: React.RefObject<HTMLButtonElement>;
  constructor(props: Props) {
    super(props);
    this.btn = React.createRef();
    this.state = {
      searchText: '',
    }
  }

  private onChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      searchText: event.target.value,
    });
  }

  private filter(song: Song): boolean {
    if (this.state.searchText === '') {
      return true;
    }
    return song.title.toLowerCase().includes(this.state.searchText.toLowerCase())
      || song.artist.toLowerCase().includes(this.state.searchText.toLowerCase());
  }


  private isSongInPlaylist(song: Song): boolean {
    if (this.props.playlist && this.props.playlist.find((s: Song): boolean => {
      return s.title === song.title && s.artist === song.artist;
    })) {
      return true;
    }
    return false;
  }

  public render() {
    const songlist = this.props.songlist.filter((song: Song, index: number): boolean => this.filter(song));

    return (
      <div className='search-container'>
        <div className='search-input-container'>
          <input
            className='search-input'
            value={this.state.searchText}
            placeholder='Search'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.onChange(event)} />
        </div>
        <div className='songlist-container'>
          {songlist.map((song: Song, index: number): JSX.Element => {
            return (
              <div className='songlist-item' key={index}>
                <div className='songlist-item_name'>{song.title} - {song.artist}</div>
                <button
                  ref={this.btn}
                  className='songlist-item_button'
                  disabled={this.isSongInPlaylist(song)}
                  onClick={() => { this.props.addSong(song); this.btn.current.setAttribute('disabled', 'disabled') }}>
                  <span className='plus'>+</span>
                </button>
              </div>);
          })}
        </div>
      </div>
    )
  }
}
