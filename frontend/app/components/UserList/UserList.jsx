import styles from './_UserList.scss';
import React from 'react';
import User from './User';
import AppActions from '../../actions/AppActions';

let { Component, PropTypes } = React;

export default class UserList extends Component {

  static defaultProps = {
      users: []
  };

  static propTypes = {
    users: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
         <a href="#" className={styles.button} onClick={this._add} >Add</a>
         <ul className={styles.users}>
            {this.props.users.map((user) => {
              return (<User key={user.id} user={user} />);
            }, this)}
         </ul>
       </div>
    );
  }
}
