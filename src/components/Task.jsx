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
    console.log('Updated')
    $.ajax({
      method: 'PUT',
      url: `/edit/${this.props.taskId}`,
      dataType: 'text',
      data: event.target.value,
    })
  }

  updateOnEnter(event) {
    if (event.keyCode === 13) {
      event.target.blur()
    }
  }

  render() {
    return (
      <input type="text" className='task' key={this.props.taskId} value={this.state.value} onChange={this.handleChange.bind(this)} onBlur={this.update.bind(this)}  onKeyUp={this.updateOnEnter.bind(this)}/>
    )
  }

}

export default Task
