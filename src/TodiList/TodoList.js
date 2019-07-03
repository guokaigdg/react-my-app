import React,{Component, Fragment}from 'react';
import './index.css'
import TodoItem from './TodoItem';
class TodoList  extends Component{
    constructor(props){
        super(props);
        this.state ={
            inputValue: '',
            list: [],
        };
    }
    render(){
    return(
        <Fragment >
            <p>备忘录</p> 
            请输入内容 : 
            <input  
                className = "input"
                value = {this.state.inputValue}
                onChange = {this.handleInputChange.bind(this)}
                // onChange监听input状态是否有输入 
            />
            <button onClick = {this.handleBtnClick.bind(this)}  >加入</button>
            <ul>
                {
                    this.state.list.map((item,index) =>{
                        return (
                        <div>
                            {/* 父组件传递数据到<TodoItem/>已供显示 */}
                            <TodoItem 
                                content= {item} 
                                index = {index}
                            />  
                        </div>
                    )
                    })
                }  
            </ul>
        </Fragment>
    )
    }
    handleInputChange(e) {   //方法
        this.setState({
            inputValue : e.target.value
            // list[0]: e.target.value
        })
    }
    handleBtnClick(){   //方法
        this.setState({
            list:[ ...this.state.list,this.state.inputValue],
            inputValue : ''
        })
    }
}

export default TodoList;