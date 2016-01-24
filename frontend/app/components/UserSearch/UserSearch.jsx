import React, {Component, PropTypes} from 'react';
import AppActions from '../../actions/AppActions';
import ItemsStore from '../../stores/ItemsStore';
import UserList from '../UserList/UserList';
import SearchBox from '../SearchBox/SearchBox';

function getAppState() {
  return {
    users: ItemsStore.getAll()
  };
}

export default class UserSearch extends Component {
  componentDidMount = () => {
    ItemsStore.addChangeListener(this.onChange);
    AppActions.getUsers();

  };

  componentWillUnmount = () =>{
    ItemsStore.removeChangeListener(this.onChange);
  };

  onChange = () => {
    this.setState({
      users: getAppState().users
    });
    this.doSearch(this.state.query);
  };

  state = {
    users: getAppState().users,
    query: '',
    filteredData: getAppState().users
  };

  doSearch = (queryText) => {
    const query = queryText.toLowerCase();
    const queryResult = (query === '') ?
      this.state.users :
      this.state.users
        .filter((user) => user.name.toLowerCase().indexOf(query) !== -1)
        .filter((user) => user.name.toLowerCase().startsWith(query));

    this.setState({
      query: queryText,
      filteredData: queryResult
    });
  };

  render = () => {

    return (
    <div>
      <SearchBox query={this.state.query} doSearch={this.doSearch} count={this.state.filteredData.length} />
      <section>
        <UserList users={this.state.filteredData.sort((a,b) => (a.name < b.name) ? -1 : 1)}/>
      </section>
    </div>
    )
  };
}
