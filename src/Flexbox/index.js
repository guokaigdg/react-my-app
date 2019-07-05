import React, { Component } from 'react'
import './index.css'
class Flexbox extends Component {
  render() {
  	return(
        // <div className = 'answer-border-normal3'>
      	<div className = 'answer-border-normal'>
      	  <div className = 'answer-title'>
            <div className = 'answer-title-left'>
              <span>正在答题中...</span>
            </div>
            <div className = 'answer-title-right'>
               <span>隐藏</span>
            </div>
          </div>

          <div className = 'answer-content'>
              <div>
                <div>
                  <span >选择</span>
                  <span >A</span>
                </div>
              </div>
              <div >
                <div >
                  <span >选择</span>
                  <span >B</span>
                </div>
              </div>
          </div>

        </div>
    )
  }
}
export default Flexbox;
