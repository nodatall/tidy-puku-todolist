import React from 'react'

class Buttons extends React.Component {
  render() {
    return this.props.showCompletedFlag ?
      <div className='buttonContainer'>
        <div className='back topButton' onClick={this.props.showIncompleted}>
          <svg width="28" height="28">
            <path d="M 11, 6 L 3, 14 L 11, 22" fill="none"/>
            <line x1="4" y1="14" x2="25" y2="14" />
          </svg>
        </div>
      </div> :
      <div className='buttonContainer'>
        <div className='add topButton' onClick={this.props.addTask}>
          <svg width="28" height="28">
            <line x1="14" y1="3" x2="14" y2="25" />
            <line x1="3" y1="14" x2="25" y2="14" />
          </svg>
        </div>
        <div className='showCompleted topButton' onClick={this.props.showCompleted}>
          <svg width="28" height="28">
            <circle cx="14" cy="14" r="12"/>
            <path id="check" d="M 6, 15 L 12, 21 L 20, 9" fill="none"/>
          </svg>
        </div>
      </div>
  }
}

export default Buttons
