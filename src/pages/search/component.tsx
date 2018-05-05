import * as React from 'react';
import { Header } from '../../components/header';
import { Search } from '../../components/search';

export class SearchPage extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Search/>
      </div>
    );
  }
}
