import React, { Component } from 'react'
import PropTypes from 'prop-types';
import _ from 'lodash'
import CX from 'classnames' ;

import './index.css';

const list= ['A','B','C','D','E','F'];
class AnswerArea extends Component{
  constructor (props){
    super(props);
    this.state = {
      isShow:false,
      chooseOption: 'null',
      isClick: false,
    }
   }
  renderAnswerOptions(answerCount) {   // 根据父组件传递个数渲染生成选项数目
  return list.slice(0,answerCount).map((item, index) => 
   <div 
    key = {index} 
    className = {CX({
    'answer-options': true,
    'answer-options-on': this.state.chooseOption === item,
    'answer-options-noclick':this.state.isClick === true || this.props.isChooseDisable === true,
     })}
    onClick = {this.handleChoose.bind(this,item)}
    >
    <span className = 'answer-content-chose-font'>选择</span>
    <span className = 'answer-options-letter-font'>{item}</span>
    </div>
  )
}
  handleChoose(choose){
     if(this.props.isChooseDisable === true){
       return
     }
      this.setState({
        chooseOption: choose,
        isClick:true,
      })
     this.props.onChooseClick()
  }
  handleHidden(){
    this.props.onHideClick();
  }
  render() {
    const wrapStyles = _.assign({}, this.props.style)
    const {answerCount} = this.props; //父组件传递过来的选项个数
  	return(
      <div className = 'answer-border' style={wrapStyles}>
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
          {this.renderAnswerOptions(answerCount)}         
        </div>
      </div>
    )
  }
}
AnswerArea.propTypes = {
  style: PropTypes.object,
  answerCount: PropTypes.number, //选项个数
  onHideClick: PropTypes.func,  //隐藏操作
  isChooseDisable:PropTypes.bool, //是否允许选项可点击
  onChooseClick:PropTypes.func, //选中之后的操作
}
AnswerArea.defaultProps = {
  style:{},
  answerCount: 2,
  onHideClick: _.noop,
  isChooseDisable: false,
  onChooseClick:_.noop,
}
export default AnswerArea;