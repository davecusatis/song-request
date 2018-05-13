import { GlobalState } from "../../models/global-state";
import { getSonglist } from "../../reducers/songlist";
import { getContext } from '../../reducers/context';
import { getSession } from '../../reducers/session';
import { ReduxStateProps, SearchComponent, PublicProps } from './component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getPlaylist } from "../../reducers/playlist";

function mapStateToProps(state: GlobalState): ReduxStateProps {
    return {
      songlist: getSonglist(state)
    };
}

export const Search = connect<ReduxStateProps, null, PublicProps>(mapStateToProps)(SearchComponent);
