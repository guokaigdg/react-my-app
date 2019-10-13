import React, {Component } from 'react';
import { Input, Button, List, Typography } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import store from '../store';
import './index.css';
import { replaceWithMeasure } from 'rc-mentions/lib/util';


class AntdTodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        console.log(this.state);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    render(){
        return(
            <div className='content' >
                <div>
                <Input 
                    value={this.state.inputValue} 
                    placeholder='todo info' 
                    tyle={{width:'300px',marginRight:'10px'}}
                    onChange={this.handleInputChange}

                />
                <Button type="primary">增加</Button>             
                </div>
                <div > 
                <List
                    style={{marginTop:'10px',width:'300px'}}
                    // size= 'default'
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered //List外边框
                    dataSource={this.state.list}
                    renderItem= {item =><List.Item>{item}</List.Item>}
                />   
                </div>

            </div>
            
        )
    }
    handleInputChange(e){
        const action  = {
            type: 'change_input_value',
            value: e.target.value,
        }
    }
}
export default AntdTodoList;  