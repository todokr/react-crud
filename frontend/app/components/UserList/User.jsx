import styles from './_UserList.scss';
import React from 'react';


let { Component, PropTypes } = React;

export default class User extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  onItemClick = (e) => {
    e.preventDefault();
    window.alert('You clicked ' + this.props.user.name);
  };

    render() {
        return (
            <li>
              <a href="#" onClick={this.onItemClick}>
                <small className={styles.postId}>#{this.props.user.id}</small>
                <h3 className={styles.title}>{this.props.user.name}</h3>
              </a>
            </li>
        );
    }


}