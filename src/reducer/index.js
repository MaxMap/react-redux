/*
 * @Date: 2023-05-24 23:13:33
 * @LastEditors: “MaxMap” 975106543@qq.com
 * @LastEditTime: 2023-05-24 23:32:59
 * @FilePath: \redux-demo\src\reducer\index.js
 */
const initState = {value:'默认值'}
const reducer = (state = initState, action)=>{
  switch(action.type){
    case 'send_type':
    return Object.assign({}, state, action);
    default:
      return state
  }
}
module.exports = {
  reducer
}
