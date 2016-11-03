import React from 'react'
import $ from 'jquery'

class Task extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.task
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value })
  }

  update(event) {
    $.ajax({
      method: 'PUT',
      url: `/edit/${this.props.taskId}`,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({text: event.target.value}),
      error: (err) => {
        console.error('update ajax failure', err)
      }
    }).then(this.props.loadTasks)
  }

  updateOnEnter(event) {
    if (event.keyCode === 13) {
      event.target.blur()
    }
  }

  remove(event) {
    $.ajax({
      method: 'DELETE',
      url: `/remove/${this.props.taskId}`,
      error: (err) => {
        console.error('remove ajax failure', err)
      }
    }).then(this.props.loadTasks)
  }

  markAsComplete(event) {
    $.ajax({
      method: 'PUT',
      url: `/complete/${this.props.taskId}`,
      error: (err) => {
        console.error('markAsComplete ajax failure', err)
      }
    }).then(this.props.loadTasks)
  }

  markAsIncomplete(event) {
    $.ajax({
      method: 'PUT',
      url: `/incomplete/${this.props.taskId}`,
      error: (err) => {
        console.error('markAsIncomplete ajax failure', err)
      }
    }).then(this.props.loadTasks)
  }

  render() {
    return (
      <div className={this.props.completed ? 'taskContainer complete' : 'taskContainer'}>
        <div
          className='circle'
          onClick={this.props.completed ? this.markAsIncomplete.bind(this) : this.markAsComplete.bind(this)}>
          <svg width="28" height="28">
            <circle cx="14" cy="14" r="12" fill="none"/>
            <path id="check" d="M 6, 15 L 12, 21 L 20, 9" fill="none"/>
          </svg>
        </div>
        <input
          type='text'
          className='taskText'
          id={'task' + this.props.taskId}
          key={this.props.taskId}
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          onBlur={this.update.bind(this)}
          onKeyUp={this.updateOnEnter.bind(this)}/>
        <div
          className='remove'
          onClick={this.remove.bind(this)}>
          <svg width="28" height="28">
            <line x1="10" y1="10" x2="18" y2="18" />
            <line x1="18" y1="10" x2="10" y2="18" />
          </svg>
        </div>
      </div>
    )
  }

}

export default Task
