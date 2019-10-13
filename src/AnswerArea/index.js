import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import CX from 'classnames'

import './index.css'

const optionsList = ['A', 'B', 'C', 'D', 'E', 'F']
const optionsObj = {
  A:require('./icon-select-A.svg'),
  B:require('./icon-select-B.svg'),
  C:require('./icon-select-C.svg'),
  D:require('./icon-select-D.svg'),
  E:require('./icon-select-E.svg'),
  F:require('./icon-select-F.svg')
}
class AnswerArea extends Component {
  state = {
    choosenOption: null,
    isChoosenOption: false,
  }

  renderAnswerOptions(optionsCount) { // 渲染选项数目
    return optionsList.slice(0, optionsCount).map(item => (
      <div
        role="button"
        tabIndex={0}
        key={item}
        className="answer_options"
        // className={CX({
        //   'answer_options': true,
        //   'options-active': this.state.choosenOption === item,
        //   'options-disable': this.state.isChoosenOption === true || this.props.enableChoose !== true,
        // })}
        onClick={() => this.handleChoose(item)}
      >
        <span 

        >
          选择
        </span>
        <span 
 
        >
          <img src={optionsObj[item]} alt=" " />
        </span>
      </div>
    ))
  }

  handleChoose(option) {
    if (this.props.enableChoose !== true) {
      return
    }
    this.setState({
      choosenOption: option,
      isChoosenOption: true,
    })
    // alert(option)
    // this.props.onChoose(option)
  }

  handleHide() {
    this.props.onClickHideButton()
  }

  render() {
    const wrapStyles = _.assign({}, this.props.style)
    const { optionsCount } = this.props 
    return (
      <div style ={{backgroundImage:"url("+require("./bc.jpg")+")"}}>
      <div className="answer-border" style={wrapStyles}>
        <div className="answer-title">
          <div className="answer-title-left">
            <span className="answer-title-left-font">
             { this.state.choosenOption === null ? '正在答题中...': `你选择了选项 "${this.state.choosenOption}"`}
            </span>
          </div>
          <div className="answer-title-right">
            <span
              role="button"
              tabIndex={0}
              className="answer-title-right-font"
              onClick={() => this.handleHide()}
            >
               隐藏
            </span>
          </div>
        </div>

        <div className="answer-content">
          {this.renderAnswerOptions(optionsCount)}
        </div>
      </div>
      </div>
    )
  }
}
AnswerArea.propTypes = {
  style: PropTypes.object,
  optionsCount: PropTypes.number, // 选项个数
  onClickHideButton: PropTypes.func, // 隐藏操作
  enableChoose: PropTypes.bool, // 是否允许选项可点击
  onChoose: PropTypes.func, // 选中之后的操作
}
AnswerArea.defaultProps = {
  style: {},
  optionsCount: 5,
  onClickHideButton: _.noop,
  enableChoose: true,
  onChoose: _.noop,
}
export default AnswerArea
