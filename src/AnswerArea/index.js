import React, { Component } from 'react'
import './index.css';
import PropTypes from 'prop-types';
import CX from 'classnames' ;
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
    'answer-options-noclick':this.state.isClick === true  //|| isChoose === true,
     })}
    onClick = {this.handleChoose.bind(this,item)}
    >
    <span className = 'answer-content-chose-font'>选择</span>
    <span className = 'answer-options-letter-font'>{item}</span>
    </div>
  )
}
  handleChoose(choose){
    // if(isChoose === true){
      this.setState({
        chooseOption: choose,
        isClick:true,
        isChoose:false,
        // onChoose()
      })
    // }
    // else{
      this.setState({
        chooseOption: choose,
        isClick:true,
        isChoose:true,
        // onChoose()
      })
    // }
  }
  handleHidden(){
    // isHidden();  
  }
  render() {
    const {answerCount} = this.props; //父组件传递过来的选项个数
    const {isChoose} = this.props;
  	return(
      <div>
      <p> 父组件传递过来的选项数目: {answerCount} 选项: {list.slice(0,answerCount)}</p>
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
          {this.renderAnswerOptions(answerCount)}         
        </div>
      </div>
      </div>
    )
  }

}
export default AnswerArea;
AnswerArea.propTypes = {
  answerCount: PropTypes.number,
  isHidden: PropTypes.func,
  isChoose:PropTypes.bool, //是否允许选项可点击
  onChoose:PropTypes.func, //选中之后的操作
}
AnswerArea.defaultProps = {
  answerCount: 2,
}