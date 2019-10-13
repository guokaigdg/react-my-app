import React from 'react';
import { Input, Button} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './index.css';

function Login() {
    return(
        <div className='body' >
            <div className='LoginWrap' >
                    <p>账户</p>
                    <Input className="invite_code"
                        placeholder='请输入邀请码' 
                        tyle={{width:'300px',marginRight:'10px'}}
                    />
                    <Input className="invite_name"
                        placeholder='请输入昵称' 
                        tyle={{width:'300px',marginRight:'10px'}}
                    />
                    <Button type="primary">增加</Button>             
            </div>
        </div>
    );
}
export default Login;  