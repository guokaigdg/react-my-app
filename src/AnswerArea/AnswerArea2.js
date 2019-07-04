import React, { Component } from 'react'
//import './App.less'
import './index.css'
class AnswerArea2 extends Component {
  render() {
  	return(
      // <div className = 'answer-area-component-wrap-normal'>
        <div>
      	<div className = 'answer-border-normal2'>
      	  <div className = 'answer-title'>
            <div className = 'answer-title-left'>
              <span className = 'answer-title-left-font'>正在答题中...</span>
            </div>
            <div className='answer-title-right'>
               <span className='answer-title-right-font'>隐藏</span>
            </div>
          </div>
          <div className = 'answer-content'>
            <div className = 'answer-content'>
              <div className = 'answer-content-chose-A'>
                <div className = 'answer-options'>
                  <span className = 'answer-content-chose-font'>选择</span>
                  <span className = 'answer-options-letter-font'>A</span>
                </div>
              </div>
              <div className = 'answer-content-chose-B'>
                <div className = 'answer-options'>
                  <span className = 'answer-content-chose-font'>选择</span>
                  <span className = 'answer-options-letter-font'>B</span>
                </div>
              </div>
              <div className = 'answer-content-chose-C'>
                <div className = 'answer-options'>
                  <span className = 'answer-content-chose-font'>选择</span>
                  <span className = 'answer-options-letter-font'>C</span>
                </div>
              </div>
              <div className = 'answer-content-chose-D'>
                <div className = 'answer-options'>
                  <span className = 'answer-content-chose-font'>选择</span>
                  <span className = 'answer-options-letter-font'>D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default AnswerArea2;
