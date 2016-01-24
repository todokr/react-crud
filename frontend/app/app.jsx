import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import './scss/app.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { createHistory, createHashHistory } from 'history';
import Root from './components/Root/Root';

const rootElem = document.getElementById('app');
const history = process.env.NODE_ENV === 'production' ?
  createHashHistory() :
  createHistory();

ReactDom.render(
  <Root history={history} />,
  rootElem
);
