import * as React from 'react';
import { RouteComponentProps, Switch, Redirect} from 'react-router-dom';
import { Song } from '../../models/song';
import { Header, HeaderProps } from '../../components/header';
import { Context } from '../../models/context';
import { Session } from '../../models/session';

interface State {}
export interface PublicProps {}
export type RouteProps = RouteComponentProps<{}>;
export interface ReduxStateProps {
  playlist?: Song[];
  context?: Context;
  session?: Session;
}

type Props = PublicProps & ReduxStateProps & RouteProps;
export class DashboardPageComponent extends React.Component<Props, State> {
  public render() {
    const { session } = this.props;
    const channel = session && session.channelId;

    return (
      <div>
        Live Config
      </div>
    );
  }
}
