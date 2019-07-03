// import React from 'react';
import React,{Component, Fragment}from 'react';
import './App';
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
            <input  className = "input"
                value = {this.state.inputValue}
                onChange = {this.handleInputChange.bind(this)}
                // onChange监听input状态是否有输入 
            />
            <button onClick = {this.handleBtnClick.bind(this)}  >加入</button>
            <ul>
                {
                    this.state.list.map((item,index) =>{
                        return (
                        <li 
                            key={index} 
                            onClick = {this.handleItemDelete.bind(this, index)}
                        >
                            [✔️] {item}      DEL
                        </li>)
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
    handleItemDelete(index){
        const list = [ ...this.state.list];
        list.splice(index,1); // 删除index下标数组, 删除数量为1个
        this.setState({
            list :list   //删除后的list赋值给新list
        })
    }
}

export default TodoList;