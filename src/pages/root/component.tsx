import { RouteComponentProps } from 'react-router-dom';
import * as React from 'react';

interface State {}
export interface PublicProps {}
export type RouteProps = RouteComponentProps<{}>;
export interface ReduxStateProps {}

type Props = PublicProps & ReduxStateProps & RouteProps;

export class RootComponent extends React.Component<Props, State> {
  public render() {
    return (
      <div>
        Hello, World
      </div>
    );
  }
}
