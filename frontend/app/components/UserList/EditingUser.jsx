import styles from './_UserList.scss';
import React, {Component, PropTypes} from 'react';
import AppActions from '../../actions/AppActions';

export default class EditingUser extends Component {

  static defaultProps = {
    user: {
      id: 9999,
      name: '',
      companyId: 1
    }
  };

  static propTypes = {
    user: PropTypes.object,
    onCancel: PropTypes.func.isRequired
  };

  state = {
    user: {
      id: this.props.user.id,
      name: this.props.user.name,
      companyId: this.props.user.companyId
    }
  };

  handleChange = (e) => {
    const strVal = e.target.value;
    this.state.user[e.target.name] = (strVal === '' || isNaN(Number(strVal))) ? strVal : Number(strVal);
    this.setState(this.state);
    console.log(this.state.user);
  };

  save = (e) => {
    e.preventDefault();
    console.log(this.state.user);
    this.props.onCancel();
    AppActions.editUser(this.state.user);
  };

  remove = (e) => {
    e.preventDefault();
    this.props.onCancel();
    AppActions.deleteUser(this.state.user);
  };

  render = () => {
    return (
      <div className={styles.userInner}>
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
        <a href="#" className={styles.save} onClick={this.save}>Save</a>
        <a href="#" className={styles.cancel} onClick={this.props.onCancel}>Cancel</a>
        <span className={styles.deleteWrapper}><a href="#" className={styles.delete} onClick={this.remove}>Delete</a></span>
      </div>
    );
  };
}
