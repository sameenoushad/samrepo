import React from "react";

const Todoitem = (props) =>{
    return(
        <li className="todo-item">
          <span>
        <input type="checkbox"/>
       <span>
       <p className="todo-item-text"></p>{props.text}
       </span>
        </span>
        <p>...</p>
    </li>
    );
  }
export default Todoitem;