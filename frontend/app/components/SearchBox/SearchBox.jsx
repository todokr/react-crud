import styles from './_SearchBox.scss';
import React from 'react';

export default class SearchBox extends React.Component {

  doSearch = () => {
    let query = this.refs.searchInput.value;
    this.props.doSearch(query);
  };

  render = () => {
    const label = (this.props.count > 1) ? 'users' : 'user';
    return(
      <div className={styles.searchBox}>
        <p>Found: <span className={styles.count}>{this.props.count}</span> {label}</p>
        <input
          type="text"
          ref="searchInput"
          placeholder="search"
          value={this.props.query}
          onChange={this.doSearch}
        />
      </div>

    )
  };

}
