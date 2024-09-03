import React from "react";
import Header from "./component/header";
import Todoitem from "./component/todoitem"
import Button from "./component/button";
import './style.css';

const App = () => {
  return (
 <div className="todo-container">
 <Header/>
 <Todoitem text="Eat"/>
 <Todoitem text="code"/>
 <Todoitem text="sleep"/>
 <Todoitem text="gamming"/>
 <Todoitem text="morning"/>
<Button/>
 </div>  
  );
};

export default App;
