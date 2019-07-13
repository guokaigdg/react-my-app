import React, {Component } from 'react';
import { Input, Button, List, Typography } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './index.css';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];  
class AntdTodoList extends Component{

    render(){
        return(
            <div className='content' >
                <div>
                <Input placeholder='todo info' style={{width:'300px',marginRight:'10px'}}></Input>
                <Button type="primary">增加</Button>             
                </div>
                <div > 
                <List
                    style={{marginTop:'10px',width:'300px'}}
                    // size= 'default'
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered //List外边框
                    dataSource={data}
                    renderItem= {item =><List.Item>{item}</List.Item>}
                />   
                </div>

            </div>
            
        )
    }
}
export default AntdTodoList;