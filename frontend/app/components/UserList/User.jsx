import styles from './_UserList.scss';
import React, {Component, PropTypes} from 'react';
import EditingUser from './EditingUser';
import ShowingUser from './ShowingUser';

export default class User extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  state = {
    isEditing: false,
    user: this.props.user
  };

  toggle = () => {
    this.setState({isEditing:! this.state.isEditing});
  };

  render = () => {
    const userItem = (this.state.isEditing) ?
      <EditingUser user={this.props.user} onCancel={this.toggle} /> :
      <ShowingUser user={this.props.user} onEdit={this.toggle} />;
    return (
      <li>{userItem}</li>
    );
  };

}
