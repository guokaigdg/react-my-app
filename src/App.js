import React,{Component, Fragment}from 'react';
// import TodoList from './TodiList/TodoList';
import AnswerArea from './AnswerArea/index';
// import constants from 'jest-haste-map/build/constants';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      answernum : 0,
    };
    this.handleClicknum0 = this.handleClicknum0.bind(this);
    this.handleClicknum2 = this.handleClicknum2.bind(this);
    this.handleClicknum4 = this.handleClicknum4.bind(this);
    this.handleClicknum6 = this.handleClicknum6.bind(this);
  }
  render(){
  return (  
   <Fragment>
       <button onClick = {this.handleClicknum0}>清空</button>
       <button onClick = {this.handleClicknum2}>2个选项</button>
       <button onClick = {this.handleClicknum4}>4个选项</button>
       <button onClick = {this.handleClicknum6}>6个选项</button>
       <p>选择的项目个数 : {this.state.answernum}</p>
       {/* <p>{this.state.answernum}</p> */}
      <AnswerArea/> 
   </Fragment>
  )
  }
  handleClicknum0(){
    this.setState({
     answernum: 0
   })
  }
  handleClicknum2(){
   this.setState({
    answernum: 2
  })
  }
  handleClicknum4(){
    this.setState({
      answernum:4
    })
  }
  handleClicknum6(){
    this.setState({
      answernum:6
    })
  }
}
export default App;

