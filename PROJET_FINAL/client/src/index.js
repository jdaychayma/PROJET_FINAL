import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter } from "react-router-dom";


import App from './App';

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);