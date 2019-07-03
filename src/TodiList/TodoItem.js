import React, {Component} from 'react';
class TodoItem extends Component{
    render(){
        return(
            <div> 
                <li 
                  key={this.props.index} 
                  onClick = {this.handleItemDelete.bind(this, this.props.index)}
                >
                 [✔️] {this.props.content}    
                 </li>
            </div>
        )
    }
    handleItemDelete(index){
        const list = [ ...this.state.list];
        list.splice(index,1); // 删除index下标数组, 删除数量为1个
        this.setState({
            list :list   //删除后的list赋值给新list
        })
    }
}
export default TodoItem;