import React,{Component}from 'react';
import { Input, Button} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// import CX from 'classnames'
import './index.css';

<<<<<<< HEAD
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
          answernum: 5,
          isHidden: 0,
          isChoose:true,
        };
        this.handleConfirmLogin = this.handleConfirmLogin.bind(this);
      }
    handleConfirmLogin() {
        alert('dd');
      }
    render(){
        return(
            <div className='body' >
                <div className='LoginWrap' >
                    <span className ='title'>React 登录</span>
                    <div className="user_info">
                        <Input 
                            className='invite_code'
                            placeholder='请输入邀请码' 
                        />
                    </div>
                    <div className="user_info">
                        <Input 
                            className="user_name"
                            placeholder='请输入昵称' 
                        />
                    <div 
                        className='login-btn'
                        onClick={()=>{this.handleConfirmLogin();}}
                    >
                        <Button 
                            type="primary">
                            登录
                        </Button>  
                    </div>       
                    </div>
                </div>
=======
function Login() {
    return(
        <div className='body' >
            <div className='LoginWrap' >
                    <p>账户</p>
                    <Input className="invite_code"
                        placeholder='请输入邀请码' 
                        type="text"
                        name="invite-code"
                        maxLength="120"
                    />
                    <Input 
                        className="invite_name"
                        placeholder='请输入昵称' 
                        type="text"
                        name="invite-code"
                        maxLength="50"
                    />
                    <Button type="primary">增加</Button>             
>>>>>>> cc2c3925285352094361582d306875f97ea3954d
            </div>
        );
    }
}
export default Login;  
