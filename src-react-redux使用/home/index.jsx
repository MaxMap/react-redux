/*
 * @description: 
 * @event: 
 * @param: 
 * @return: 
 */

import React from "react";
// import store from "../store";
// import { sendAction } from "../action";
import ComA from "../components/comA";
import ComB from "../components/comB";
export default class Home extends React.Component {
  render(){
    return (
      <>
      <ComA></ComA>
      <ComB></ComB>
        {/* <p>{store.getState().value}</p>
        <button onClick={this.handClick}>add</button> */}
      
      </>
    )
  }
}
