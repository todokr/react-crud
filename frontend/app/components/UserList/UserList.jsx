import styles from './_UserList.scss';
import React, {Component, PropTypes} from 'react';
import User from './User';
import UserInput from './UserInput';

export default class UserList extends Component {

  static defaultProps = {
    users: []
  };

  static propTypes = {
    users: PropTypes.array.isRequired
  };

  render = () => {
    const users = (this.props.users.length > 0) ?
      this.props.users.map((user) => { return <User key={user.id} user={user} />}) :
      (<li className={styles.nothingToShow}>Sorry, here's nothing to show.</li>);

    return (
      <div className={styles.body}>
        <ul className={styles.users}>
          {users}
        </ul>
        <UserInput />
      </div>
    );
  };
}
