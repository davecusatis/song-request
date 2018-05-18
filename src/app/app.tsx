import { Config } from './config';
import { Store } from './store';
import * as sessionActions from '../actions/session';
import * as playlistActions from '../actions/playlist';
import * as contextActions from '../actions/context';
import * as songlistActions from '../actions/songlist';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Session } from '../models/session';
import { Context } from '../models/context';

export let app: App;
export let config: typeof app.config;
export let store: typeof app.store; 

export function initApp(configuration: Config) {
  app = new App(configuration);
  config = app.config;
}

export class App {
  public config: Config;
  public store: Store;

  constructor(configuration: Config) {
    this.config = configuration;
    this.store = new Store(this.config);

    window.Twitch.ext.onAuthorized((auth: Session) => {
      this.store.dispatch(sessionActions.onAuthorized(auth));
      this.store.dispatch(playlistActions.updatePlaylist(auth.token));
      this.store.dispatch(songlistActions.updateSonglist(auth.token));
    });
 
    window.Twitch.ext.onContext((context: any) => {
      this.store.dispatch(contextActions.onContext(context));
    });

    window.Twitch.ext.onError((error: string | Error) => {

    });

    window.Twitch.ext.listen('broadcast', (target: any, contentType: any, message: any) =>{
      message = JSON.parse(message);
      switch(message.type) {
        case 'playlistUpdated':
          // window.Twitch.ext.rig.log('updating playlist with: ', message.data);
          this.store.dispatch(playlistActions.playlistUpdated(message.data.playlist));
          break;
        case 'songlistUpdated':
        // window.Twitch.ext.rig.log('updating songlist with: ', message.data);
          this.store.dispatch(songlistActions.songlistUpdated(message.data.songlist));
          break;
        default:
          break;
      }
    });
  }

  public wrap(element: JSX.Element) {
    return (
      <Provider store={this.store.getReduxStore()}>
        {element}
      </Provider>
    );
  }

  public mount(element: JSX.Element, rootElement: HTMLElement) {
    ReactDOM.render(this.wrap(element), rootElement);
  }
}
