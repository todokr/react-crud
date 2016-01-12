import styles from './_Body.scss';
import React from 'react';
import Menu from '../Menu/Menu';



let { PropTypes } = React;

export default class Body extends React.Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

    render() {
      return (
      <div className={styles.body}>
        <h1 className={styles.header}>React CRUD Sample</h1>
        <p>This is an example CRUD app, powered by React, ES6 &amp; webpack.</p>
        <section>
          <h3>Users</h3>
          <Menu items={this.props.items}/>
        </section>
      </div>
    );
  }
}
