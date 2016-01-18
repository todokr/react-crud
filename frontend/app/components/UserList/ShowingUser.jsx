import styles from './_UserList.scss';
import React from 'react';

let { Component, PropTypes } = React;

export default class ShowingUser extends Component {

  static defaultProps = {
    user: {
      id: 9999,
      name: "",
      companyId: 1
    }
  };

  static propTypes = {
    user: PropTypes.object,
    onEdit: PropTypes.func.isRequired
  };

  render() {
    return (
      <a href="#" className={styles.userInner} onClick={this.handleClick}>
        <h3 className={styles.name}>{this.props.user.name}</h3> - {this.props.user.companyId}
      </a>
    );
  }

  handleClick = (e) => {
    this.props.onEdit(e);
  }
}
