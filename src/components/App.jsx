import React from 'react'
import TaskList from './TaskList.jsx'
import $ from 'jquery'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
    }
    this.loadTasks()
  }

  loadTasks() {
    $.ajax({
      method: 'GET',
      url: '/getAll',
      contentType: 'application/json',
      dataType: 'json',
    }).then(tasks => {
      this.setState({tasks: tasks})
    })
  }

  addTask() {
    $.ajax({
      method: 'POST',
      url: '/add',
    }).then(this.loadTasks.bind(this))
  }

  render() {
    const taskList = this.state.tasks.length === 0 ?
      <div>Click + to add a task</div> :
      <TaskList tasks={this.state.tasks} loadTasks={this.loadTasks.bind(this)} />

    return (
      <div className='container'>
        <div className='add' onClick={this.addTask.bind(this)}>+</div>
        {taskList}
      </div>
    )
  }
}

export default App
