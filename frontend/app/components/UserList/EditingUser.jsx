import styles from './_UserList.scss';
import React from 'react';

let { Component, PropTypes } = React;

export default class EditingUser extends Component {

  static defaultProps = {
    user: {
      id: 9999,
      name: "",
      companyId: 1
    }
  };

  static propTypes = {
    user: PropTypes.object,
    onSave: PropTypes.func.isRequired
  };

  state = {
    user: {
      id: this.props.user.id,
      name: this.props.user.name,
      companyId: this.props.user.companyId
    }
  };

  edit = (e) => {
    e.preventDefault();
    this.state.isEditing = true;
    console.log(`state is ${this.state.isEditing}`);
  };


  render() {
    return (
      <div className={styles.userInner}>
        <small className={styles.userId}>#{this.props.user.id}</small>
        <input
          placeholder='User Name'
          name="name"
          defaultValue={this.state.user.name}
          onChange={this.handleChange}
        />
        <select
          name="companyId"
          defaultValue={this.state.user.companyId}
          onChange={this.handleChange}
        >
          <option value="1">Awesome Inc</option>
          <option value="2">Brilliant co.,ltd.</option>
          <option value="3">Colorful Corporation</option>
        </select>
        <a href="#" className={styles.save}>Save</a>
        <a href="#" className={styles.delete}>Delete</a>
      </div>
    );
  }
}
