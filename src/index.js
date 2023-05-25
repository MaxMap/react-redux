/*
 * @Date: 2023-05-24 21:25:56
 * @LastEditors: “MaxMap”
 * @LastEditTime: 2023-05-25 20:16:19
 * @FilePath: \redux-demo\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);

