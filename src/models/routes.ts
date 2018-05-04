export interface RouteEntry {
  title: string;
  path: string;
  exact?: boolean;
  hidden?: boolean;
  routes?: RouteEntry[];
  component?: React.ComponentClass;
}
