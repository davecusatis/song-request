import { RouteEntry } from '../models/routes';
import { PlaylistPage } from '../pages/playlist';
import { SearchPage } from '../pages/search';
import { DashboardPage } from '../pages/dashboard';
import { BroadcasterConfigPage } from '../pages/broadcaster';
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
    index: 2,
    title: 'Songlist',
    path: '/songlist',
    exact: true,
    component: SearchPage,
  },
  {
    index: 3,
    title: 'Broadcaster Config',
    path: '/config',
    exact: true,
    component: BroadcasterConfigPage,
  },
  {
    index: 4,
    title: 'Live Config',
    path: '/dashboard',
    exact: true,
    component: DashboardPage,
  }
];

export function renderRoutes(): JSX.Element[] {
  return routes.map((route: RouteEntry): JSX.Element => 
    <Route key={route.index} exact={route.exact} path={route.path} component={route.component} />)
  ;
}
