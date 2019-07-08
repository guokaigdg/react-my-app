import React,{Component, Fragment}from 'react';
import TodoList from './TodiList/TodoList';
import AnswerArea from './AnswerArea/index';
// import constants from 'jest-haste-map/build/constants';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      answernum: 0,
      isHidden: 0,
    };
    this.handleClicknum = this.handleClicknum.bind(this);
  }
  render(){
  return (  
   <Fragment>
       <button onClick = {this.handleClicknum.bind(this,'null')}>清空</button>
       <button onClick = {this.handleClicknum.bind(this, 2)}>2个选项</button>
       <button onClick = {this.handleClicknum.bind(this, 3)}>3个选项</button>
       <button onClick = {this.handleClicknum.bind(this, 4)}>4个选项</button>
       <button onClick = {this.handleClicknum.bind(this, 5)}>5个选项</button>
       <button onClick = {this.handleClicknum.bind(this, 6)}>6个选项</button>
       <p>选择的项目个数 : {this.state.answernum}</p>
       <button onClick = {this.handleHidden}>123</button>
       <p>isHidden : {this.state.isHidden}</p>
       {/* <p>{this.state.answernum}</p> */}
      {/* <TodoList/> */}
      <AnswerArea 
        count ={this.state.answernum}
        // handleHidden = {this.handleHidden}
      /> 
     
   </Fragment>
  )
  }
  handleClicknum(choose){
    this.setState({
     answernum: choose
   })
  }
}
export default App;

