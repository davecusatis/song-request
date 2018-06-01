import { Song } from '../models/song';
import { app } from '../app/app';
import * as songlistActions from '../actions/songlist';

export class PlaylistAPI {
  private apiRoot = 'http://localhost:3030/';
  private cloudFrontRoot = 'https://d392vuotjjcije.cloudfront.net/'

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
    const payload = atob(jwt.split('.')[1]);
    const { channel_id }   = JSON.parse(payload);
    return fetch(this.cloudFrontRoot + channel_id + '.txt', {
      headers: {
        'content-type': 'text/plain',
      }
    })
    .then((value: Response) =>  value.text())
    .then((resp: string) => {
      const rawSonglist = resp.trim().split('\n');
      const songlist = rawSonglist.map(song => {
        if (song) {
          const s = song.split(' , ');
          return {
            title: s[1].trim(),
            artist: s[0].trim(),
          }
        }
      });
      app.store.dispatch(songlistActions.songlistUpdated(songlist));
    }).catch((reason: any) => {
      console.log(reason);
      app.store.dispatch(songlistActions.songlistUpdated([]));
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

  public addSong(jwt: string, song: Song): Promise<void> {
    return fetch(this.apiRoot + 'api/v0/playlist', {
      method: 'PUT',
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
