import styles from './_UserList.scss';
import React from 'react';
import AppActions from '../../actions/AppActions';

let {Component, PropTypes} = React;

export default class UserInput extends Component {

  static defaultProps = {
    user: {
      id: 9999,
      name: '',
      companyId: 1
    }
  };

  static propTypes = {
    user: PropTypes.object
  };

  state = {
    user: {
      id: this.props.user.id,
      name: this.props.user.name,
      companyId: this.props.user.companyId
    }
  };

  render = () => {
    // TODO optionはハードコードしておきたくない
    return (
      <form ref="inputForm" className={styles.form}>
        <input
          placeholder='User Name'
          name="name"
          value={this.state.user.name}
          onChange={this.handleChange.bind(this)}
        />
        <select
          name="companyId"
          value={this.state.user.companyId}
          onChange={this.handleChange.bind(this)}
        >
          <option value="1">Awesome Inc</option>
          <option value="2">Brilliant co.,ltd.</option>
          <option value="3">Colorful Corporation</option>
        </select>

        <a href="#" onClick={this.add}>Save</a>
      </form>
    );
  };

  handleChange = (e) => {
    const strVal = e.target.value;
    this.state.user[e.target.name] = (strVal === '' || isNaN(Number(strVal))) ? strVal : Number(strVal);
    this.setState(this.state);
  };

  add = (e) => {
    e.preventDefault();
    AppActions.createUser(this.state.user);
    this.setState({user:{}});
  };
}
