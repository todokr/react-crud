import styles from './_UserList.scss';
import React from 'react';

let {Component, PropTypes} = React;

export default class UserInput extends Component {

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

  render() {
    // TODO optionはハードコードしておきたくない
    return (
      <form className={styles.form}>
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

        <a href="#" onClick={this.add.bind(this)}>Save</a>
      </form>
    );
  };

  handleChange = (e) => {
    var val = e.target.value;
    val = (val === '' || isNaN(+val)) ? val : +val;
    this.state.user[e.target.name] = val;
    this.setState(this.state);
  };

  add = (e) => {
    e.preventDefault();
    this.props.onSave(this.state.user);
    this.setState({user: {}});
  };
}
