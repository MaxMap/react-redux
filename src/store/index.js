/*
 * @Date: 2023-05-24 23:19:40
 * @LastEditors: “MaxMap”
 * @LastEditTime: 2023-05-25 21:06:11
 * @FilePath: \redux-demo\src\store\index.js
 */
import {legacy_createStore as createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {reducer} from '../reducer'


const store = createStore(reducer,applyMiddleware(thunk))

export default store
