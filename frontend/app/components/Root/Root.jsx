import React, { PropTypes, Component } from 'react';
import { Router, Route } from 'react-router';

import App from '../App/App';
import UserSearch from '../UserSearch/UserSearch';
import About from '../Pages/About';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const {history} = this.props;
    return (
      <Router history={history}>
        <Route path='/' component={App}>
          <Route path='/userList' component={UserSearch} />
          <Route path='/about' component={About} />
        </Route>
      </Router>
    );
  }
}
