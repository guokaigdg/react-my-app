import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import CX from 'classnames'

import './index.css'

const optionslist = ['A', 'B', 'C', 'D', 'E', 'F']
class AnswerArea extends Component {
  state = {
    choosenOption: null,
    isChoosenOption: false,
  }

  renderAnswerOptions(optionsCount) { // 渲染选项数目
    return optionslist.slice(0, optionsCount).map(item => (
      <div
        role="button"
        tabIndex={0}
        key={item}
        className={CX({
          'answer-options': true,
          'answer-options-on': this.state.choosenOption === item,
          'answer-options-noclick': this.state.isChoosenOption === true || this.props.enableChoose === true,
        })}
        onClick={() => this.handleChoose(item)}
      >
        <span className="answer-content-chose-font">选择</span>
        <span className="answer-options-letter-font">{item}</span>
      </div>
    ))
  }

  handleChoose(option) {
    if (this.props.enableChoose === true) {
      return
    }
    this.setState({
      choosenOption: option,
      isChoosenOption: true,
    })
    this.props.onChoose(option)
  }

  handleHide() {
    this.props.onClickHideButton()
  }

  render() {
    const wrapStyles = _.assign({}, this.props.style)
    const { optionsCount } = this.props 
    return (
      <div className="answer-border" style={wrapStyles}>
        <div className="answer-title">
          <div className="answer-title-left">
            <span className="answer-title-left-font">正在答题中...</span>
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
  optionsCount: 2,
  onClickHideButton: _.noop,
  enableChoose: false,
  onChoose: _.noop,
}
export default AnswerArea
