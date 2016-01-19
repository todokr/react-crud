import styles from './_UserList.scss';
import React, {Component, PropTypes} from 'react';

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
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  state = {
    user: {
      id: this.props.user.id,
      name: this.props.user.name,
      companyId: this.props.user.companyId
    }
  };


  render() {
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
        <a href="#" className={styles.save} onClick={this.props.onSave.bind(this)}>Save</a>
        <a href="#" className={styles.cancel} onClick={this.props.onCancel}>Cancel</a>
        <span className={styles.deleteWrapper}><a href="#" className={styles.delete} onClick={this.props.onDelete}>Delete</a></span>
      </div>
    );
  }
}
