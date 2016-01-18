import styles from './_UserList.scss';
import React, {Component, PropTypes} from 'react';
import EditingUser from './EditingUser';
import ShowingUser from './ShowingUser';

export default class User extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  state = {
    isEditing: false,
    user: this.props.user
  };

  edit = (e) => {
    e.preventDefault();
    this.setState({isEditing: true});
  };

  cancel = (e) => {
    e.preventDefault();
    this.setState({isEditing: false});
  };

  toggle = (e) => {
    e.preventDefault();
    this.setState({isEditing:! this.state.isEditing});
  };

  save = (e, data) => {
    e.preventDefault();
    this.setState({
      isEditing: false,
      user: data
    });
    this.props.onSave(data);
  };

  delete = (e) => {
    e.preventDefault();
    this.setState({
      isEditing: false
    });
    this.props.onDelete(this.props.user);
  };

  render() {
    const userItem = (this.state.isEditing) ?
      <EditingUser user={this.props.user} onSave={this.edit} onCancel={this.toggle} onDelete={this.delete} /> :
      <ShowingUser user={this.props.user} onEdit={this.toggle} />;

    return (
      <li>{userItem}</li>
    );
  }

}
