import * as React from 'react';
import * as classNames from 'classnames';
import { RouteComponentProps, Switch, Redirect} from 'react-router-dom';
import { renderRoutes } from '../routes';
import { Twitch } from '../../models/twitch';
import { linkIdentitySession } from '../../actions/session';
import './component.scss';

interface State {
  open: boolean;
}
export interface PublicProps {}
export type RouteProps = RouteComponentProps<{}>;
export interface ReduxStateProps {
  isLinked: boolean;
}

export interface ReduxDispatchProps {
  linkIdentity: (twitch: Twitch) => linkIdentitySession;
}

type Props = PublicProps & ReduxStateProps & RouteProps & ReduxDispatchProps;

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

  private renderApp(collapserClasses: string, rootContainerClasses: string): JSX.Element{
    return (
      <>
        <div onClick={() => this.toggleOpen() } className={collapserClasses}>></div>
        <div className={rootContainerClasses}>
          <Switch>
            {renderRoutes()}
          </Switch>
        </div>
      </>
    );
  }

  private renderLinkAccount(): JSX.Element {
    return (
      <div className='link-dialog'>
        In order to use the Song Request extension, we need to know your Twitch username.
        <br />
        <br />
        We use this to let the broadcaster know who requested which track.
        <br />
        <br />
        <button onClick={() => this.props.linkIdentity(window.Twitch.ext)}>Link your Twitch ID</button>
      </div>
    )
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
      {this.props.isLinked ?
        this.renderApp(collapserClasses, rootContainerClasses) :
        this.renderLinkAccount()
      }
      </div>
    );
  }
}
