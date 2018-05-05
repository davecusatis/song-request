import * as React from 'react';

export class PlaylistComponent extends React.Component {
  public render() {
    return (
      <div>
        Now Playing: {this.props}
      </div>
    )
  }
}
