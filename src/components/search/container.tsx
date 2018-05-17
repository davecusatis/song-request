import { GlobalState } from "../../models/global-state";
import { getSonglist } from "../../reducers/songlist";
import { ReduxStateProps, SearchComponent, PublicProps } from './component';
import { connect } from 'react-redux';

function mapStateToProps(state: GlobalState): ReduxStateProps {
  return {
    songlist: getSonglist(state)
  };
}

export const Search = connect<ReduxStateProps, null, PublicProps>(mapStateToProps)(SearchComponent);
