import React, {Component} from 'react';
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        return(
            <div onClick = {this.handleClick}>               
                 [✔️] {this.props.content}                  
            </div>
        )
    }
    handleClick(){
        // 子组件向父组件传递 数组下标index  this.props.deleteItem是父组件传递过来的方法
        this.props.deleteItem(this.props.index)
    }
}
export default TodoItem;