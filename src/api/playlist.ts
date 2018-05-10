export class PlaylistAPI {
  public ping(jwt: string): Promise<void> {
    return fetch('http://localhost:3030/api/v0/ping',{
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
    return fetch('http://localhost:3030/api/v0/songlist',{
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
    return fetch('http://localhost:3030/api/v0/playlist',{
      method: 'GET',
      headers: {
        'authorization': 'Bearer ' + jwt,
      },
    }).then((value: Response) => {

    }).catch((reason: any) => {
      console.log(reason);
    });
  }
}
