import { GlobalState } from "../../models/global-state";
import { ReduxStateProps, HeaderComponent, PublicProps } from './component';
import { connect } from 'react-redux';
import { getPlaylist } from "../../reducers/playlist";

function mapStateToProps(state: GlobalState): ReduxStateProps {
  return {
    playlist: getPlaylist(state)
  };
}

export const Header = connect<ReduxStateProps, null, PublicProps>(mapStateToProps)(HeaderComponent);
