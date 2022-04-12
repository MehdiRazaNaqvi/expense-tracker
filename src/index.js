import React from 'react';
import ReactDOM from 'react-dom';
import  store  from "./store/index"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

ReactDOM.render(

  <Provider store = {store}>
    <App />
  </Provider>

  ,
  document.getElementById('root')
);


reportWebVitals();
