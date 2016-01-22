import styles from './_UserList.scss';
import React from 'react';

let { Component, PropTypes } = React;

export default class ShowingUser extends Component {

  static defaultProps = {
    user: {
      id: 9999,
      name: '',
      companyId: 1
    }
  };

  static propTypes = {
    user: PropTypes.object,
    onEdit: PropTypes.func.isRequired
  };

  companyMaster = [
    'undefined',
    'Awesome Inc',
    'Brilliant co.,ltd.',
    'Colorful Corporation'
  ];

  render = () => {
    return (
      <a href="#" className={styles.userInner} onClick={this.handleClick}>
        <h3 className={styles.name}>{this.props.user.name}</h3><span className={styles.companyName}>{this.companyMaster[this.props.user.companyId]}</span>
      </a>
    );
  };

  handleClick = (e) => {
    this.props.onEdit(e);
  };
}
