import * as React from 'react';
import { Song } from '../../models/song';

export interface SearchProps {
  addSong(song: Song): void;
  songlist?: Song[];
}

export interface SearchState {
  filteredSonglist: Song[];
  searchText: string;
}

export class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps){
    super(props);
    this.state = {
      filteredSonglist: this.props.songlist,
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
  

  public render() {
    const songlist = this.state.filteredSonglist.filter((song: Song, index: number): boolean => this.filter(song));

    console.log(this.state.searchText);
    return (
      <div>
        Search
        <input
          value={this.state.searchText}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.onChange(event)} />
        {songlist.map((song: Song, index: number): JSX.Element => {
          return (
            <div key={index}>
              {song.title} - {song.artist} Add
            </div>);
        })}
      </div>
    )
  }
}
