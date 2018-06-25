import { GlobalState } from "../../models/global-state";
import { linkIdentity } from '../../actions/session';
import { isLinkedAccount } from '../../reducers/session';
import { ReduxStateProps, RootComponent, PublicProps, ReduxDispatchProps} from './component';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { withRouter } from 'react-router';
import { Twitch } from '../../models/twitch';

function mapStateToProps(state: GlobalState): ReduxStateProps {
  return {
    isLinked: isLinkedAccount(state),
  };
}

function mapDispatchToProps (dispatch: Dispatch<any, any>) {
  return {
    linkIdentity: (twitch: Twitch) => dispatch(linkIdentity(twitch)),
  }
}

const connectedComponent = connect<ReduxStateProps, ReduxDispatchProps, PublicProps>(mapStateToProps, mapDispatchToProps)(RootComponent);
export const Root: React.ComponentClass<PublicProps> = withRouter(connectedComponent);
