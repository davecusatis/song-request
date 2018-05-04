import { RouteEntry } from '../models/routes';
import { Playlist } from '../pages/playlist';
import * as React from 'react';
import { Route } from 'react-router';

const routes: RouteEntry[] = [
  {
    index: 0,
    title: 'Playlist',
    path: '/',
    exact: true,
    component: Playlist,
  },
  {
    index: 1,
    title: 'Playlist Overlay',
    path: '/video',
    exact: true,
    component: Playlist,
  },
  {
    index: 2,
    title: 'Playlist Panel',
    path: '/panel',
    exact: true,
    component: Playlist,
  },
  {
    index: 3,
    title: 'Playlist Component',
    path: '/component',
    exact: true,
    component: Playlist,
  }
];

export function renderRoutes(): JSX.Element[] {
  return routes.map((route: RouteEntry): JSX.Element => 
    <Route key={route.index} exact={route.exact} path={route.path} component={route.component} />)
  ;
}
