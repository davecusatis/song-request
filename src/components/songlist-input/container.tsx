import { GlobalState } from "../../models/global-state";
import { ReduxStateProps, SonglistInputComponent, PublicProps } from './component';
import { connect } from 'react-redux';
import { getSonglist } from "../../reducers/songlist";

function mapStateToProps(state: GlobalState): ReduxStateProps {
  return {
    songlist: getSonglist(state)
  };
}

export const SonglistInput = connect<ReduxStateProps, null, PublicProps>(mapStateToProps)(SonglistInputComponent);
