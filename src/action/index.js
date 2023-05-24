/*
 * @Date: 2023-05-24 23:07:26
 * @LastEditors: “MaxMap” 975106543@qq.com
 * @LastEditTime: 2023-05-24 23:12:18
 * @FilePath: \redux-demo\src\action\index.js
 */
// 构建action函数
const sendAction = ()=>{
  return {
    type:'send_type',
    value:'测试Action'
  }
}

module.exports = {
  sendAction
}
