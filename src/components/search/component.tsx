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
  constructor(props: Props){
    super(props);
    this.state = {
      searchText: '',
    }
  }

  private onChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      searchText: event.target.value,
    });
  }

  private filter(song: Song): boolean{
    if (this.state.searchText === '') {
      return true;
    }
    return song.title.toLowerCase().includes(this.state.searchText.toLowerCase())
    || song.artist.toLowerCase().includes(this.state.searchText.toLowerCase());
  }


  private isSongInPlaylist(song: Song): boolean {
    if(this.props.playlist && this.props.playlist.find((s: Song): boolean => {
      return s.title === song.title && s.artist === song.artist;
    })) {
      return true;
    }
    return false;
  }

  public render() {
    const songlist = this.props.songlist.filter((song: Song, index: number): boolean => this.filter(song));

    return (
      <div>
        Search
        <input
          value={this.state.searchText}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.onChange(event)} />
        <div className='songlist-container'>
          {songlist.map((song: Song, index: number): JSX.Element => {
            return (
              <div className='songlist-item' key={index}>
                {song.title} - {song.artist} <button disabled={this.isSongInPlaylist(song)} onClick={() => { this.props.addSong(song); }}>Add</button>
              </div>);
          })}
        </div>
      </div>
    )
  }
}
