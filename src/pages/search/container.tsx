import { GlobalState } from "../../models/global-state";
import { getSonglist } from "../../reducers/songlist";
import { getContext } from '../../reducers/context';
import { getSession } from '../../reducers/session';
import { ReduxStateProps, SearchPageComponent, PublicProps } from './component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getPlaylist } from "../../reducers/playlist";

function mapStateToProps(state: GlobalState): ReduxStateProps {
    return {
      playlist: getPlaylist(state),
      songlist: getSonglist(state),
      context: getContext(state),
      session: getSession(state)
    };
}

export const SearchPage = connect<ReduxStateProps, null, PublicProps>(mapStateToProps)(SearchPageComponent);
