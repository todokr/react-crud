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
    return (

      <div className={styles.body}>
        <ul className={styles.users}>
          {this.props.users.map((user) => {
            return (<User key={user.id} user={user} />);
          }, this)}
        </ul>
        <UserInput />
      </div>
    );
  };
}
