import * as React from 'react';
import { Song } from '../../models/song';

interface State {
  searchText: string;
}

export interface PublicProps {
  editable: boolean;
  channel: string;
}
export interface ReduxStateProps {
  playlist?: Song[];
}

type Props = PublicProps & ReduxStateProps;

export class PlaylistComponent extends React.Component<Props, State> {
  public render() {
    const { playlist, editable, channel } = this.props;

    return (
      <div>
        {playlist ? this.renderPlaylist(editable) : this.renderLoading(channel)}
      </div>
    )
  }


  private renderPlaylist(editable: boolean): JSX.Element[]{
    const { playlist } = this.props;
    if (playlist === undefined) {
      return null;
    }

    return playlist.map((song: Song, index: number): JSX.Element => {
      return(
        <div key={index}>
          {song.title} - {song.artist}, {song.genre}, {song.game} {editable && <button>Delete</button>}
        </div>
      );
    });
  }

  private renderLoading(channelId: string): JSX.Element{
    return (
      <div>
        Loading {channelId} playlist...
      </div>
    );
  }
}
