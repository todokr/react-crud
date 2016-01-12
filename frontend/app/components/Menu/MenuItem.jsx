import React from 'react';

let { Component, PropTypes } = React;

export default class MenuItem extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  };

  onItemClick = (e) => {
    e.preventDefault();
    window.alert('You clicked ' + this.props.item.label);
  };

    render() {
        return (
            <a href="#" onClick={this.onItemClick}>
              <li>{this.props.item.label}</li>
            </a>
        );
    }


}
