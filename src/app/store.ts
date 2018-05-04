import { Config } from './config';
import { applyMiddleware, compose, createStore, Reducer, combineReducers, Store as ReduxStore } from 'redux';
import { BuildType } from '../models/build-type';
import thunk from 'redux-thunk';
import { Action, AsyncAction } from '../models/actions';
import { GlobalState } from '../models/global-state';
import { playlistReducer } from '../reducers/playlist';

declare const window: Window;

interface AppState {
  [key: string]: object;
}

export class Store{
  private reduxStore: ReduxStore<AppState>;
  private rootReducer: Reducer;

  private initRootReducer(): Reducer{
    return combineReducers({
      playlistReducer
    });
  }

  constructor(config: Config) {
    this.rootReducer = this.initRootReducer();

    this.reduxStore = createStore(
      this.rootReducer,
      applyMiddleware(thunk),
    );
  }

  public dispatch<T>(action: Action<T> | AsyncAction) {
    //tslint:disable-next-line:no-any
    return this.reduxStore.dispatch(action as any);
  }

  public getState() {
    return (this.reduxStore.getState() as {}) as GlobalState;
  }

  public getReduxStore() {
    return (this.reduxStore as {}) as ReduxStore<GlobalState>;
  }
};
