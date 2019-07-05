import React, { Component } from 'react'
import './index.css';
import CX from 'classnames' ;
class AnswerArea extends Component {
  constructor (props){
    super(props);
    this.state = {
      chooseOption: 'null',
    }
  }
  render() {
    // 生成多个选择项
    // const renderAnswerOptions = () => {
    //     return elclasses.map((elclass, i) => <div key={elclass} ref={highlightRefs.current[i]} className="guide-element-highlight guide-showElement" />)
    // }
  	return(
      <div>
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
                'answer-options-on': this.state.chooseOption === 'A',
                'answer-options-off': this.state.chooseOption !== 'A',
              })}
                onClick = {this.handlechoose.bind(this,'A')}
              >
                <span className = 'answer-content-chose-font'>选择</span>
                <span className = 'answer-options-letter-font'>A</span>
              </div>
              <div className = {CX({
                'answer-options-on': this.state.chooseOption === 'B',
                'answer-options-off': this.state.chooseOption !== 'B',
              })}
                onClick = {this.handlechoose.bind(this,'B')}
              >
                <span className = 'answer-content-chose-font'>选择</span>
                <span className = 'answer-options-letter-font'>B</span>
              </div>
              <div className = {CX({
                'answer-options-on': this.state.chooseOption === 'C',
                'answer-options-off': this.state.chooseOption !== 'C',
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