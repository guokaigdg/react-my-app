import React, { Component } from 'react'
import './index.css';
import PropTypes from 'prop-types';
import CX from 'classnames' ;
class AnswerArea extends Component {
  static propTypes = {
    count: PropTypes.number,
}
  static defaultProps = {
  count: 2,
}
  constructor (props){
    super(props);
    this.state = {
      isShow:false,
      chooseOption: 'null',
      isClick: false,
      test:'on',
    }
  }
  render() {
    const list= ['A','B','C','D','E','F'];
    const {count} = this.props; //父组件传递过来选项个数
    const renderAnswerOptions = () => {  // 根据父组件传递发个数渲染生成选项数目
        return list.slice(0,count).map((item, index) => 
        <div 
          key = {index} 
          className = {CX({
          'answer-options': true,
          'answer-options-on': this.state.chooseOption === item,
          'answer-options-noclick':this.state.isClick == true,
           })}
          onClick = {this.handlechoose.bind(this,item)}
          >
          <span className = 'answer-content-chose-font'>选择</span>
          <span className = 'answer-options-letter-font'>{item}</span>
          </div>
        )
    }
  	return(
      <div>
      <p> 父组件传递过来的选项数目: {count} 选项: {list.slice(0,count)}</p>
      <p>隐藏开关: {this.state.test}</p>
      <div className = 'answer-border'>
        <div className = 'answer-title'>
          <div className = 'answer-title-left'>
            <span className = 'answer-title-left-font'>正在答题中...</span>
          </div>
          <div className='answer-title-right'>
             <span 
              className='answer-title-right-font'
              onClick = {this.handleHidden.bind(this)}
             >
               隐藏
            </span>
          </div>
        </div>
        <div className = 'answer-content'>
          {renderAnswerOptions()}         
        </div>
      </div>
      </div>
    )
  }
  handlechoose(choose){
    this.setState({
      chooseOption: choose,
      isClick: true,
    })
  }
  handleHidden(){
    this.setState({
      test:'off',
    })
  }
  handleClick(){
    this.setState({
      isClick:true
    })
  }
}
export default AnswerArea;