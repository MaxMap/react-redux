/*
 * @Date: 2023-05-24 23:01:39
 * @LastEditors: “MaxMap” 975106543@qq.com
 * @LastEditTime: 2023-05-24 23:39:24
 * @FilePath: \redux-demo\src\home\index.js
 */
import React from "react";
import store from "../store";
import { sendAction } from "../action";
export default class Home extends React.Component {

  componentDidMount(){
    // 注册监听事件
    store.subscribe(()=>{
      console.log('subscribe:',store.getState());
    })
  }

  handClick = ()=>{
    store.dispatch(sendAction())
    this.setState({})
  }
  render(){
    return (
      <>
        <p>{store.getState().value}</p>
        <button onClick={this.handClick}>add</button>
      
      </>
    )
  }
}
