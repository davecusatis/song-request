import { GlobalState } from "../../models/global-state";
import { getSonglist } from "../../reducers/songlist";
import { ReduxStateProps, SearchComponent, PublicProps } from './component';
import { connect } from 'react-redux';
import { getPlaylist } from "../../reducers/playlist";

function mapStateToProps(state: GlobalState): ReduxStateProps {
  return {
    songlist: getSonglist(state),
    playlist: getPlaylist(state),
  };
}

export const Search = connect<ReduxStateProps, null, PublicProps>(mapStateToProps)(SearchComponent);
