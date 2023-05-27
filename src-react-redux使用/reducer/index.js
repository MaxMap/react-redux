/*
 * @Date: 2023-05-24 23:13:33
 * @LastEditors: “MaxMap”
 * @LastEditTime: 2023-05-25 22:50:03
 * @FilePath: \redux-demo\src\reducer\index.js
 */
const initState = {value:'默认值'}
const reducer = (state = initState, action)=>{
  console.log(state, action);
  switch(action.type){
    case 'send_type':
    return Object.assign({}, state, action);
    case 'add_type':
    return Object.assign({}, state, action);
    case 'GET':
    return action;
    default:
      return state
  }
}
module.exports = {
  reducer
}
