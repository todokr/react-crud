import styles from './_Body.scss';
import React, {PropTypes} from 'react';
import UserList from '../UserList/UserList';
import SearchBox from '../SearchBox/SearchBox';

export default class Body extends React.Component {

  static propTypes = {
    users: PropTypes.array.isRequired
  };

  static defaultProps = {
    users: []
  };

  state = {
    users: this.props.users,
    query: '',
    filteredData: this.props.users
  };
  componentWillReceiveProps = (props) => {
    this.setState({filteredData: props.users});
  };

  doSearch = (queryText) => {
    const query = queryText.toLowerCase();
    const queryResult = (query === '') ?
      this.props.users :
      this.props.users
        .filter((user) => user.name.toLowerCase().indexOf(query) !== -1)
        .filter((user) => user.name.toLowerCase().startsWith(query));

    this.setState({
      query: queryText,
      filteredData: queryResult
    });
  };

  render = () => {
    return (
      <div className={styles.body}>
        <h1 className={styles.header}>React CRUD Sample</h1>
        <p className={styles.lead}>This is an example CRUD app, powered by React, axios &amp; webpack with ES6/7
          syntax.</p>
        <SearchBox query={this.state.query} doSearch={this.doSearch} count={this.state.filteredData.length} />
        <section>
          <UserList users={this.state.filteredData.sort((a,b) => (a.name < b.name) ? -1 : 1)}/>
        </section>
      </div>
    );
  };
}
