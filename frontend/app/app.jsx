import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import './scss/app.scss';

import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App/App';

ReactDom.render(
  <App />,
  document.getElementById('app')
);
