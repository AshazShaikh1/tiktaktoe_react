import React from "react";

function Block(props){
  return <div onClick={props.handleclick} className="block">{props.value}</div>;
}

export default Block