import * as React from 'react';
import { Song } from '../../models/song';
import { app }  from '../../app/app';
import * as playlistActions from '../../actions/playlist';

interface State {
  searchText: string;
}

export interface PublicProps {
  editable: boolean;
  channel: string;
  deleteSong?: Function;
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
    const { playlist, deleteSong } = this.props;
    if (playlist === undefined) {
      return null;
    }

    return playlist.map((song: Song, index: number): JSX.Element => {
      return(
        <div key={index}>
          {song.title} - {song.artist} {song.requestedBy} {(editable) && <button onClick={() => this.props.deleteSong(song)}>Delete</button>}
        </div>
      );
    });
  }
  private renderRequestedBy(song: Song): JSX.Element {
    if (!song.requestedBy) {
      return null;
    }

    return (
      <span>
        (song.requestedBy)
      </span>
    );
  }
  private renderLoading(channelId: string): JSX.Element{
    return (
      <div>
        No songs added to playlist yet.
      </div>
    );
  }
}
