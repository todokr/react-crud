import styles from './_UserList.scss';
import React from 'react';
import EditingUser from './EditingUser';
import ShowingUser from './ShowingUser';


let { Component, PropTypes } = React;

export default class User extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired
  };

  state = {
    isEditing: false,
    user: this.props.user
  };

  edit = (e) => {
    e.preventDefault();
    this.setState({isEditing: true});
  };

  save = (e, data) => {
    e.preventDefault();
    this.setState({
      isEditing: false,
      user: data
    });
    this.props.onSave(data);
  };

  render() {
    var u;
    console.log(`state is ${this.state.isEditing}`);
    if(this.state.isEditing) {
      u = <EditingUser
        user={this.props.user}
        onSave={this.edit}
      />;
    } else {
      u = <ShowingUser
        user={this.props.user}
        onEdit={this.edit}
      />;
    }

    return (
      <li>{u}</li>
    );
  }

}
