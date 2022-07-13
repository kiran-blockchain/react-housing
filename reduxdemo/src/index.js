import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Provider, Store and reducer
import {Provider} from 'react-redux';
import thunk  from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import reducer from "./state"
import logger from 'redux-logger';
import { customLog } from './middleware/customLog';
//configure store with reducer i.e. counter
const store = createStore(reducer,applyMiddleware(thunk,logger,customLog))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App/>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();