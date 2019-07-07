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
      list: [],
    }
  }
  render() {
    const {count} = this.props; //父组件传递过来选项个数
    
    // 根据父组件传递发个数渲染生成选项数目
    // const renderAnswerOptions = () => {
    //     return elclasses.map((elclass, i) => <div key={elclass} ref={highlightRefs.current[i]} className="guide-element-highlight guide-showElement" />)
    // }
  	return(
      <div>
      <p> 父组件传递过来的选项数目: {count}</p>
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
            {/* 渲染选择项 */}
            {/* {renderAnswerOptions()}  */}
             
              <div className = {CX({
                'answer-options': true,
                'answer-options-on': this.state.chooseOption === 'A',
                 })}
                onClick = {this.handlechoose.bind(this,'A')}
                >
                <span className = 'answer-content-chose-font'>选择</span>
                <span className = 'answer-options-letter-font'>A</span>
                 </div>
              <div className = {CX({
                'answer-options': true,
                'answer-options-on': this.state.chooseOption === 'B',
              })}
                onClick = {this.handlechoose.bind(this,'B')}
              >
                <span className = 'answer-content-chose-font'>选择</span>
                <span className = 'answer-options-letter-font'>B</span>
              </div>
              <div className = {CX({
                'answer-options': true,
                'answer-options-on': this.state.chooseOption === 'C',
              })}
                onClick = {this.handlechoose.bind(this,'C')}
              >
                <span className = 'answer-content-chose-font'>选择</span>
                <span className = 'answer-options-letter-font'>C</span>
              </div>
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