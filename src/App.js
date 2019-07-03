import React,{Component, Fragment}from 'react';
//import logo from './logo.svg';
//import './App.css';
import TodoList from './TodiList/TodoList';
import AnswerArea1 from './AnswerArea1';
import AnswerArea2 from './AnswerArea2';
import AnswerArea3 from './AnswerArea3';
import constants from 'jest-haste-map/build/constants';
function App () {
  return (
   <Fragment>
       <button>3个选项</button>
       <button>4个选项</button>
       <button>5个选项</button>
       <button>6个选项</button>

       <TodoList/>
       <p></p>
       {/* <AnswerArea1/> */}
       <p> </p>
       {/* <AnswerArea2/> */}
       <p></p>       
       {/* <AnswerArea3/> */}
   </Fragment>

  );

}
export default App;

