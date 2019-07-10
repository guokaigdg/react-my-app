import React,{Component, Fragment}from 'react';
import TodoList from './TodiList/TodoList';
import AnswerArea from './AnswerArea/index';
import NewApp from './NewApp/index';
import Flexbox from './Flexbox/index';
import GuokaiBlog from './GuokiaBlog/index';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      answernum: 0,
      isHidden: 0,
      isChoose:false,
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
       
      {/* <TodoList/> */}
      <AnswerArea 
         optionsCount ={this.state.answernum}
         onClickHideButton = {this.isHidden}
         enbleChoose = {this.state.isChoose}
         onChoose = {this.onChoose}
      /> 
      {/* <NewApp/> */}
      {/* <Flexbox/> */}
      <GuokaiBlog/>
   </Fragment>
  )
  }
  handleClicknum(choose){
    this.setState({
     answernum: choose,
   })
  }
  onChoose(){
    alert("123");
  }
  isHidden(){
   alert("隐藏");
  }
}
export default App;

