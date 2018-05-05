class PlaylistAPI {
  public getPlaylist() {
    return fetch('http://localhost:5000/api/v1/playlist')
  }
}
