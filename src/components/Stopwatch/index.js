// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timer: 0}

  startTimer = () => {
    clearInterval(this.timerId)
    this.timerId = setInterval(this.time, 1000)
  }

  time = () => {
    this.setState(prevState => ({
      timer: prevState.timer + 1,
    }))
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  resetTimer = () => {
    this.setState({
      timer: 0,
    })
    clearInterval(this.timerId)
  }

  render() {
    const {timer} = this.state
    const seconds = Math.floor(timer % 60)
    const minutes = Math.floor(timer / 60)
    return (
      <div className="app-container">
        <h1 className="stop-watch-heading">Stopwatch</h1>
        <div className="stop-watch-container">
          <div className="stop-watch-timer-container">
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopWatchTimer"
                className="timer-img"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="timer" testid="timer">
              <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
              <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
            </h1>
            <div className="button-container">
              <button
                type="button"
                className="button start"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
