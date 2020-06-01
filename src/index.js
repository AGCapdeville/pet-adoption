import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { Provider } from 'react-redux'
import configureStore from './app-components/configurestore';

const rootElement = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
