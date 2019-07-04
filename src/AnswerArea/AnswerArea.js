import React, { Component } from 'react'
import AnswerArea2 from './AnswerArea2';
import AnswerArea3 from './AnswerArea3';
import './index.css';

class AnswerArea extends Component {
  constructor(props){
    super(props);
    this.state = {
      chooseItem : '',
    }
  }
  render() {
    const {count} = this.props;
  	return(
      <div>
      {/* <p>{count}</p> */}
      <div className = 'answer-border-normal3'>
        <div className = 'answer-title'>
          <div className = 'answer-title-left'>
            <span className = 'answer-title-left-font'>正在答题中...</span>
          </div>
          <div 
            className='answer-title-right'
            role="button"
            >
             <span className='answer-title-right-font'>隐藏</span>
          </div>
        </div>
        <div className = 'answer-content'>
          <div className = 'answer-content'>
            <div 
              className = 'answer-content-chose-A'
              role = 'button'
              onClick = {this.handlechooseA.bind(this,'A')}
              >
              <div className = 'answer-options'>
                <span className = 'answer-content-chose-font'>选择</span>
                <span className = 'answer-options-letter-font'>A</span>
              </div>
            </div>
            <div 
              className = 'answer-content-chose-B'
              onClick = {this.handlechooseA.bind(this,'B')}
              >
              <div className = 'answer-options'>
                <span className = 'answer-content-chose-font'>选择</span>
                <span className = 'answer-options-letter-font'>B</span>
              </div>
            </div>
            <div className = 'answer-content-chose-C' onClick = {this.handlechooseA.bind(this,'C')}>
              <div className = 'answer-options'>
                <span className = 'answer-content-chose-font'>选择</span>
                <span className = 'answer-options-letter-font'>C</span>
              </div>
            </div>
            <div className = 'answer-content-chose-D' onClick = {this.handlechooseA.bind(this,'D')}>
              <div className = 'answer-options'>
                <span className = 'answer-content-chose-font'>选择</span>
                <span className = 'answer-options-letter-font'>D</span>
              </div>
            </div>
            <div className = 'answer-content-chose-E'>
              <div className = 'answer-options'>
                <span className = 'answer-content-chose-font'>选择</span>
                <span className = 'answer-options-letter-font'>E</span>
              </div>
            </div>
            <div className = 'answer-content-chose-F'>
              <div className = 'answer-options'>
                <span className = 'answer-content-chose-font'>选择</span>
                <span className = 'answer-options-letter-font'>F</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>你选择了: {this.state.chooseItem}</p>
    </div>
    )
  }
  handlechooseA(choose,event){
    this.setState({
      chooseItem: choose
    })
  }
}
export default AnswerArea;
