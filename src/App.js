import React,{Fragment}from 'react';
//import logo from './logo.svg';
//import './App.css';
import TodoList from './TodoList';
import AnswerArea1 from './AnswerArea1';
import AnswerArea2 from './AnswerArea2';
import AnswerArea3 from './AnswerArea3';
function App() {
  return (
   <Fragment>
       {/* <TodoList/> */}
       <AnswerArea1/>
       <p> </p>
       <AnswerArea2/>
       <p></p>       
       <AnswerArea3/>
   </Fragment>

  );
}
export default App;

