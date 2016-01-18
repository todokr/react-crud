import styles from './_UserList.scss';
import React, {Component, PropTypes} from 'react';
import User from './User';
import UserInput from './UserInput';
import AppActions from '../../actions/AppActions';


export default class UserList extends Component {

  static defaultProps = {
    users: []
  };

  static propTypes = {
    users: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className={styles.body}>
        <UserInput
          onSave={this.handleSave.bind(this)}
        />
        <ul className={styles.users}>
          {this.props.users.map((user) => {
            return (<User key={user.id} user={user} onSave={this.handleSave.bind(this)} onDelete={this.handleDelete.bind(this)}/>);
          }, this)}
        </ul>
      </div>
    );
  };

  handleSave = (user) => {
    AppActions.createUser(user);
  }

  handleDelete = (user) => {
    AppActions.deleteUser(user);
  }
}
