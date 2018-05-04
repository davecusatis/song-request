import { RouteComponentProps, Switch, Redirect} from 'react-router-dom';
import * as React from 'react';
import { renderRoutes } from '../routes';

interface State {}
export interface PublicProps {}
export type RouteProps = RouteComponentProps<{}>;
export interface ReduxStateProps {}

type Props = PublicProps & ReduxStateProps & RouteProps;

export class RootComponent extends React.Component<Props, State> {
  public render() {
    return (
      <div>
        <Switch>
          {renderRoutes()}
          <Redirect from='/' to='component' />
        </Switch>
      </div>
    );
  }
}
