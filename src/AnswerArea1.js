import React, { Component } from 'react'
//import './App.less'
import './App.css'
class AnswerArea1 extends Component {
  render() {
  	return(
      // <div className = 'answer-area-component-wrap-normal'>
        <div>
      	<div className = 'answer-border-normal1'>
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
              <div  className = 'answer-content-chose-A'>
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

            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default AnswerArea1;
