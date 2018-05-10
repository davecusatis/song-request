import { RouteEntry } from '../models/routes';
import { PlaylistPage } from '../pages/playlist';
import { SearchPage } from '../pages/search';
import * as React from 'react';
import { Route } from 'react-router';

const routes: RouteEntry[] = [
  {
    index: 0,
    title: 'Playlist',
    path: '/',
    exact: true,
    component: PlaylistPage,
  },
  {
    index: 1,
    title: 'Playlist',
    path: '/playlist',
    exact: true,
    component: PlaylistPage,
  },
  {
    index: 1,
    title: 'Songlist',
    path: '/songlist',
    exact: true,
    component: SearchPage,
  },
  {
    index: 1,
    title: 'Playlist Overlay',
    path: '/video',
    exact: true,
    component: PlaylistPage,
  },
  {
    index: 2,
    title: 'Playlist Panel',
    path: '/panel',
    exact: true,
    component: PlaylistPage,
  },
  {
    index: 3,
    title: 'Playlist Component',
    path: '/component',
    exact: true,
    component: PlaylistPage,
  }
];

export function renderRoutes(): JSX.Element[] {
  return routes.map((route: RouteEntry): JSX.Element => 
    <Route key={route.index} exact={route.exact} path={route.path} component={route.component} />)
  ;
}
