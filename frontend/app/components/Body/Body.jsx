import styles from './_Body.scss';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default class Body extends React.Component {

  render = () => {
    const users = this.props.users;
    return (
      <div className={styles.body}>
        <header className={styles.header}>
          <h1 className={styles.logo}><Link to="/">React CRUD Sample</Link></h1>
          <ul className={styles.menu}>
            <li><Link to="/userList">Users</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </header>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    );
  };
}
