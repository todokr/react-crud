import styles from './_UserList.scss';
import React from 'react';
import User from './User';
import UserInput from './UserInput';
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
        <UserInput
            onSave={this.handleSave.bind(this)}
                    />
         <ul className={styles.users}>
            {this.props.users.map((user) => {
              return (<User key={user.id} user={user} />);
            }, this)}
         </ul>
       </div>
    );
  };

    handleSave(user) {
        AppActions.createUser(user);
    }
}
