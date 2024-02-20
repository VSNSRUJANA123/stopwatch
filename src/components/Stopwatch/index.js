// Write your code here
import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {seconds: 0, minutes: 0}

  tick = () => {
    const {seconds} = this.state
    if (seconds < 60) {
      this.setState(prev => ({seconds: prev.seconds + 1}))
    } else {
      this.setState({seconds: 0})
      this.setState(prev => ({minutes: prev.minutes + 1}))
    }
  }

  startTime = () => {
    this.timerID = setInterval(this.tick, 1000)
  }

  stopTime = () => {
    clearInterval(this.timerID)
  }

  resetTime = () => {
    const {seconds, minutes} = this.state
    this.setState({minutes: 0, seconds: 0})
    clearInterval(this.timerID)
  }

  render() {
    const {seconds, minutes} = this.state
    return (
      <div className="wholeContainer">
        <h1 className="stopWatchTitle">Stopwatch</h1>
        <div className="watchContainer">
          <div className="timerTitle">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1>
            {minutes >= 0 && minutes < 10 ? `0${minutes}` : minutes}:
            {seconds >= 0 && seconds < 10 ? `0${seconds}` : seconds}
          </h1>
          <div>
            <button className="green" onClick={this.startTime}>
              Start
            </button>
            <button className="red" onClick={this.stopTime}>
              Stop
            </button>
            <button className="orange" onClick={this.resetTime}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
