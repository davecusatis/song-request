import { Config } from './config';
import { Store } from './store';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

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

    window.Twitch.ext.onAuthorized(() => {
      console.log('authed');
    });

    window.Twitch.ext.onContext((context: Context) => {
      console.log('got context', context);
    });

    window.Twitch.ext.onError((error: string | Error) => {

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
