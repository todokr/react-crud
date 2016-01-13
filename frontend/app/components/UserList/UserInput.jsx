import React from 'react';

let {Component, PropTypes} = React;

export default class UserInput extends Component {

    static defaultProps = {
        user: {}
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
        return (
            <form>
              <button onClick={this.add}>add</button>
            <input
                placeholder='User ID'
                name="id"
                value={this.state.user.id}
                onChange={this.handleChange.bind(this)}
            />
            <input
                placeholder='User Name'
                name="name"
                value={this.state.user.name}
                onChange={this.handleChange.bind(this)}
            />
            <input
                placeholder='Company ID'
                name="companyId"
                value={this.state.user.companyId}
                onChange={this.handleChange.bind(this)}
            />
            </form>
        );
    };

    handleChange(e) {
      this.state.user[e.target.name] = e.target.value
      console.dir(this.state);
        this.setState(this.state);
    };

    add() {
        this.props.onSave(this.state.user);
        this.setState(defaultProps);
    };
}
