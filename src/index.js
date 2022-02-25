import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
//import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux'



ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
  document.getElementById('root')
);
