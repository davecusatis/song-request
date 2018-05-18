import { Song } from '../models/song';

export class PlaylistAPI {
  private apiRoot = 'http://localhost:3030/';

  public ping(jwt: string): Promise<void> {
    return fetch(this.apiRoot + 'api/v0/ping',{
      method: 'POST',
      headers: {
        'authorization': 'Bearer ' + jwt,
      },
    }).then((value: Response) => {

    }).catch((reason: any) => {
      console.log(reason);
    });
  }

  public getSonglist(jwt: string): Promise<void> {
    return fetch(this.apiRoot + 'api/v0/songlist',{
      method: 'GET',
      headers: {
        'authorization': 'Bearer ' + jwt,
      },
    }).then((value: Response) => {

    }).catch((reason: any) => {
      console.log(reason);
    });
  }

  public getPlaylist(jwt: string): Promise<void> {
    return fetch(this.apiRoot + 'api/v0/playlist',{
      method: 'GET',
      headers: {
        'authorization': 'Bearer ' + jwt,
      },
    }).then((value: Response) => {

    }).catch((reason: any) => {
      console.log(reason);
    });
  }

  public postSonglist(jwt: string, songlist: string): Promise<void> {
    return fetch(this.apiRoot + 'api/v0/songlist',{
      method: 'POST',
      headers: {
        'authorization': 'Bearer ' + jwt,
      },
      body: songlist,
    }).then((value: Response) => {

    }).catch((reason: any) => {
      console.log(reason);
    });
  }

  public skipSong(jwt: string): Promise<void> {
    return fetch(this.apiRoot + 'api/v0/playlist/skip',{
      method: 'POST',
      headers: {
        'authorization': 'Bearer ' + jwt,
      }
    }).then((value: Response) => {

    }).catch((reason: any) => {
      console.log(reason);
    });
  }

  public deleteSong(jwt: string, song: Song): Promise<void> {
    return fetch(this.apiRoot + 'api/v0/playlist', {
      method: 'DELETE',
      headers: {
        'authorization': 'Bearer ' + jwt,
      },
      body: JSON.stringify(song),
    }).then((value: Response) => {

    }).catch((reason: any) => {
      console.log(reason);
    });
  }
}
