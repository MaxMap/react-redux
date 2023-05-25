/*
 * @Date: 2023-05-24 23:07:26
 * @LastEditors: “MaxMap”
 * @LastEditTime: 2023-05-25 22:47:54
 * @FilePath: \redux-demo\src\action\index.js
 */
// 构建action函数
export const sendAction = ()=>{
  return {
    type:'send_type',
    value:'测试Action'
  }
}

export const addAction = (val)=>{
  return {
    type:'add_type',
    value:val
  }
}

export const getAction = (val)=>{
  return (dispatch,getState) =>{
    fetch('./data.json')
    .then(res =>res.json())
    .then(res=>{
      // console.log(res);
      dispatch({
        type:'GET',
        value:res.data
      })
    })
  }
}
// module.exports = {
//   sendAction,addAction
// }
