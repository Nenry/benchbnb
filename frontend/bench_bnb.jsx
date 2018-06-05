import React from 'react';
import ReactDOM from 'react-dom';
import {signUp, login, logout} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.signUp = signUp;
  window.logout = logout;
  window.login = login;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.store = store;
  ReactDOM.render(<Root store={store}/>, root);
});
