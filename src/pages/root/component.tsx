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
    const rootClass = classNames({
      'app-root': true,
      'open': this.state.open,
      'closed': !this.state.open,
    });
    console.log(rootClass);
    return (
      <div className={rootClass}>
        <div onClick={() => this.toggleOpen() } className='collapser open' />
        <Switch>
          {renderRoutes()}
        </Switch>
      </div>
    );
  }
}
