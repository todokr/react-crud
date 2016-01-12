import styles from './_User.scss';
import React from 'react';
import User from './User';

let {Component, PropTypes} = React;

export default class Users extends Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <ul className={styles.user}>
        {this.props.items.map((item) => {
          return (<User item={item} />);
        }, this)}
      </ul>
    )
  }
}
