import { RouteEntry } from '../models/routes';
import { Playlist } from '../pages/playlist';
import * as React from 'react';
import { Route } from 'react-router';

const routes: RouteEntry[] = [
  {
    title: 'Playlist',
    path: '/',
    exact: true,
    component: Playlist,
  },
];

export function renderRoutes(): JSX.Element[] {
  return routes.map((route: RouteEntry): JSX.Element => 
    <Route exact={route.exact} path={route.path} component={route.component} />)
  ;
}
