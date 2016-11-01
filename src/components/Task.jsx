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
    console.log('Updated', typeof(event.target.value))
    $.ajax({
      method: 'POST',
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

  render() {
    return (
      <div className='taskContainer'>
        <div className='circle'>O</div>
        <input type='text' className='taskText' key={this.props.taskId} value={this.state.value} onChange={this.handleChange.bind(this)} onBlur={this.update.bind(this)}  onKeyUp={this.updateOnEnter.bind(this)}/>
        <div className='remove'>X</div>
      </div>
    )
  }

}

export default Task
