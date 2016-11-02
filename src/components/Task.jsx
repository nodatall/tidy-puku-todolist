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
      dataType: 'json',
      data: JSON.stringify({text: event.target.value})
    })
  }

  updateOnEnter(event) {
    if (event.keyCode === 13) {
      event.target.blur()
    }
  }

  remove(event) {
    $.ajax({
      method: 'DELETE',
      url: `/remove/${this.props.taskId}`
    }).then(this.props.loadTasks.bind(this))
  }

  markAsComplete() {
    $.ajax({
      method: 'PUT',
      url: `/complete/${this.props.taskId}`
    }).then(this.props.loadTasks.bind(this))
  }

  render() {
    return (
      <div className='taskContainer'>
        <div className='circle' onClick={this.markAsComplete.bind(this)}>O</div>
        <input type='text' className='taskText' key={this.props.taskId} value={this.state.value} onChange={this.handleChange.bind(this)} onBlur={this.update.bind(this)}  onKeyUp={this.updateOnEnter.bind(this)}/>
        <div className='remove' onClick={this.remove.bind(this)}>X</div>
      </div>
    )
  }

}

export default Task
