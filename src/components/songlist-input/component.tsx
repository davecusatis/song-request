import * as React from 'react';
import { Link } from 'react-router-dom';
import { Song } from '../../models/song';

export interface SonglistInputProps {
  onSubmit(songlist: Song[]): void;
  songlist?: Song[];
}

export interface SonglistInputState {
  songlistString?: string;
}

export class SonglistInput extends React.Component<SonglistInputProps, SonglistInputState>{
  constructor(props: SonglistInputProps) {
    super(props);
    const s = this.songlistToString(this.props.songlist);
    this.state = {
      songlistString: s,
    };
  }

  private songlistToString(songlist: Song[]): string {
    let songlistString = ""
    songlist.map((song: Song) => {
      songlistString += `${song.title} , ${song.artist}\n`
    });
    return songlistString;
  }

  private stringToSonglist(songlistString: string): Song[] {
    let songlist:Song[] = [];
    const songs = songlistString.split('\n');
    songs.map((song: string, index: number) => {
      if (song) {
        let attrs = song.split(',');
        let title = attrs[0].trim();
        let artist = attrs[1].trim();
        songlist.push({
          title: title,
          artist: artist,
        })
      }
    });
    return songlist;
  }

  private onChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({
      songlistString: event.target.value,
    });
  }


  public render() {
    return (
      <div>
        <textarea 
          value={this.state.songlistString}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => this.onChange(event)}/>
        <button onClick={(_: React.MouseEvent<HTMLElement>) => 
          this.props.onSubmit(this.stringToSonglist(this.state.songlistString))
        }>Submit</button>
      </div>
    );
  }
}
