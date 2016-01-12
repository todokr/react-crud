import React from 'react';

let {Component, PropTypes} = React;

export default class User extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  };

  onUserClick = (e) => {
    e.preventDefault();
    window.alert('You clicked' + this.props.item)
  }

  render() {
    return (
        <li userId={this.props.item.id}>
          <a href="#" onClick={this.onUserClick}>{this.props.item.name}, {this.props.item.email}</a>
        </li>
    );
  }
}
