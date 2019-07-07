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
      list0: [],
      list2: ['A','B'],
      list3: ['A','B','C'],
      list: ['A','B','C','D'],
      list5: ['A','B','C','D','E'],
      list6: ['A','B','C','D','E','F'],
      guokai: 'ok',
    }
  }
  render() {
    const {count} = this.props; //父组件传递过来选项个数

    const renderAnswerOptions = () => {  // 根据父组件传递发个数渲染生成选项数目
       
        return this.state.list.map((item, index) => 
        <div 
          key = {index} 
          className = {CX({
          'answer-options': true,
          'answer-options-on': this.state.chooseOption === item,
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
      <p> 父组件传递过来的选项数目: {count}</p>
      <p> 父组件传递过来的选项数目: {this.state.guokai}</p>
      {/* <li>{this.status.list2}</li> */}
      <div className = 'answer-border'>
        <div className = 'answer-title'>
          <div className = 'answer-title-left'>
            <span className = 'answer-title-left-font'>正在答题中...</span>
          </div>
          <div className='answer-title-right'>
             <span className='answer-title-right-font'>隐藏</span>
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
    })
  }
  
}
export default AnswerArea;