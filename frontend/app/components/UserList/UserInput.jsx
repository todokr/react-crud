import styles from './_UserList.scss';
import React from 'react';

let {Component, PropTypes} = React;

export default class UserInput extends Component {

  static defaultProps = {
    user: { id: 9999 }
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
          selected={this.state.user.companyId}
          onChange={this.handleChange.bind(this)}
        >
          <option selected disabled>Select Company</option>
          <option value="1">会社A</option>
          <option value="2">会社B</option>
          <option value="3">会社C</option>
        </select>

        <a href="#" onClick={this.add.bind(this)}>add</a>
      </form>
    );
  };

  handleChange(e) {
    var val = e.target.value;
    console.log(val);
    val = (val === '' || isNaN(+val))? val : +val;
    console.log(val);
    this.state.user[e.target.name] = val;
    this.setState(this.state);
    console.log(this.state);
  };

  add() {
    this.props.onSave(this.state.user);
    this.setState({user: {}});
  };
}
