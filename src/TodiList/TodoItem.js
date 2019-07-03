import React, {Component} from 'react';
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);  // 优化
    }
    render(){
        const {content} = this.props;  //优化
        return(
            <div onClick = {this.handleClick}>               
                 [✔️] {content}                  
            </div>
        )
    }
    handleClick(){
        // 子组件向父组件传递 数组下标index  this.props.deleteItem是父组件传递过来的方法 
        const {deleteItem , index} = this.props ;  //优化 this.props.deleteItem 分开
        deleteItem(index);
    }
}
export default TodoItem;