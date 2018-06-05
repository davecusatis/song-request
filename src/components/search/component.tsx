import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Song } from '../../models/song';

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


  private renderAddButton(song: Song): JSX.Element {
    let isDisabled = false;
    if(this.props.playlist && this.props.playlist.find((s: Song): boolean => {
      return s.title === song.title && s.artist === song.artist;
    })) {
      isDisabled = true;
    }
    return (<button disabled={isDisabled} onClick={() => { this.props.addSong(song); }}>Add</button>);
  }

  public render() {
    const songlist = this.props.songlist.filter((song: Song, index: number): boolean => this.filter(song));

    return (
      <div>
        Search
        <input
          value={this.state.searchText}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.onChange(event)} />
        {songlist.map((song: Song, index: number): JSX.Element => {
          return (
            <div key={index}>
              {song.title} - {song.artist} {this.renderAddButton(song)}
            </div>);
        })}
      </div>
    )
  }
}
