import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div role= "img" aria-label= "click-item" className= "click-item" onClick={() => props.selectChar(props.id)}>
      <img alt= {props.name} src= {props.image}/>
    </div>
  );
}

export default FriendCard;
