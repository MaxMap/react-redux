/*
 * @Date: 2023-05-24 23:19:40
 * @LastEditors: “MaxMap” 975106543@qq.com
 * @LastEditTime: 2023-05-24 23:23:27
 * @FilePath: \redux-demo\src\store\index.js
 */
import {legacy_createStore as createStore} from 'redux'

import {reducer} from '../reducer'


const store = createStore(reducer)

export default store
