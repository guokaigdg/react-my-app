import React,{Component, Fragment}from 'react';
import TodoItem from './TodoItem';
import './index.css';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state ={
            inputValue: '',
            list: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this); // 优化
        this.handleBtnClick = this.handleBtnClick.bind(this);  //优化
        this.handleItemDelete = this.handleItemDelete.bind(this); //优化
    }
    render(){
    return(
        <Fragment >
            <p>备忘录</p> 
            请输入内容 : 
            <input  
                className = "input"
                value = {this.state.inputValue}
                onChange = {this.handleInputChange} // onChange监听input状态是否有输入 
            />
            <button onClick = {this.handleBtnClick}  >加入</button>
            <ul>
                {this.getTodoList()} 
            </ul>
        </Fragment>
    )
    }
    getTodoList(){
        return this.state.list.map((item,index) =>{
            return (
                // 父组件传递数据到<TodoItem/>已供显示
                <TodoItem 
                    key = {index}
                    content= {item}  //传递数据
                    index = {index}  //传递数据
                    deleteItem = {this.handleItemDelete}  //传递方法给子组件
                // this.handleItemDelete.bind(this)强制指向父组件
                />  
        )
     })
    }
    handleInputChange(e) {   //方法
        const value = e.target.value;  //优化
        this.setState(()=>({
            inputValue : value
        }));
    }
    handleBtnClick(){   //方法
        this.setState({
            list:[ ...this.state.list,this.state.inputValue],
            inputValue : ''
        })
    }
    handleItemDelete(index){
        const list = [ ...this.state.list];
        list.splice(index,1); // 删除index下标数组, 删除数量为1个
        this.setState({
            list :list   //删除后的list赋值给新list
        })
    }
}
export default TodoList;