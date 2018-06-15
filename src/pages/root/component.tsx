import * as React from 'react';
import * as classNames from 'classnames';
import { RouteComponentProps, Switch, Redirect} from 'react-router-dom';
import { renderRoutes } from '../routes';
import './component.scss';

interface State {
  open: boolean;
}
export interface PublicProps {}
export type RouteProps = RouteComponentProps<{}>;
export interface ReduxStateProps {}

type Props = PublicProps & ReduxStateProps & RouteProps;

export class RootComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: true,
    };
  }
  private toggleOpen() {
    this.setState({
      open: !this.state.open,
    });
  }
  public render() {
    const rootClasses = classNames({
      'app-root': true,
      'open': this.state.open
    });

    const collapserClasses = classNames({
      'collapser': true,
      'open': this.state.open,
    });
    const rootContainerClasses = classNames({
      'app-root-container': true,
      'open': this.state.open,
    })
    return (
      <div className={rootClasses}>
        <div onClick={() => this.toggleOpen() } className={collapserClasses}>></div>
        <div className={rootContainerClasses}>
          <Switch>
            {renderRoutes()}
          </Switch>
        </div>
      </div>
    );
  }
}
