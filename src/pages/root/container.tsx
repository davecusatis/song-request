import { GlobalState } from "../../models/global-state";
import { getPlaylist } from "../../reducers/playlist";
import { ReduxStateProps, RootComponent, PublicProps } from './component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

function mapStateToProps(state: GlobalState): ReduxStateProps {
    return {
      playlist: getPlaylist(state)
    };
}

const connectedComponent = connect<ReduxStateProps, null, PublicProps>(mapStateToProps)(RootComponent);
export const Root: React.ComponentClass<PublicProps> = withRouter(connectedComponent);
