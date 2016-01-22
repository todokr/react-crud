import styles from './_SearchBox.scss';
import React from 'react';

export default class SearchBox extends React.Component {

  doSearch = () => {
    let query = this.refs.searchInput.value;
    this.props.doSearch(query);
  };

  render = () => {
    return(
      <div className={styles.searchBox}>
        <p>Result: <span className={styles.count}>{this.props.count}</span></p>
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
