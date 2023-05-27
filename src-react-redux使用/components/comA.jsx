/*
 * @Date: 2023-05-25 19:52:13
 * @LastEditors: “MaxMap”
 * @LastEditTime: 2023-05-25 22:42:49
 * @FilePath: \redux-demo\src\components\comA.jsx
 */
import React from "react";
import { connect } from "react-redux";
import {addAction,sendAction,getAction } from '../action/index'

const mapStateToProps = (state) =>{
  return {
    num:state
  }
}

const mapDsipathToProps = (dispath)=>{
  return {
    add:(value)=>dispath(addAction(value)),
    square:()=>dispath(sendAction()),
    getAction:()=>dispath(getAction())
  }
}
class ComA extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // console.log(props);
  // }

  handleClick = ()=>{
    this.props.add('123')
    // console.log('this.props.num',this.props.num);
  }

  getClick = () =>{
    this.props.getAction()
  }


  render(){
    return (
      <>
      <p>{this.props.num.value}</p>
        <button onClick={this.handleClick}>ComA</button>
        <button onClick={this.getClick}>req异步请求</button>
      </>
    )
  }
}

export default connect(mapStateToProps,mapDsipathToProps)(ComA)
