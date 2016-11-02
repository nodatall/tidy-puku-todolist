import React from 'react'
import TaskList from './TaskList.jsx'
import $ from 'jquery'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      showCompletedFlag: false
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

  showCompleted() {
    this.setState({showCompletedFlag: true})
  }

  showIncompleted() {
    this.setState({showCompletedFlag: false})
  }

  render() {
    const taskList = this.state.tasks.length === 0 ?
      <div>Click + to add a task</div> :
      <TaskList
        tasks={this.state.tasks}
        loadTasks={this.loadTasks.bind(this)} showCompletedFlag={this.state.showCompletedFlag}
      />

    return (
      <div className='container'>
        {this.state.showCompletedFlag ?
          <div className='back topButton' onClick={this.showIncompleted.bind(this)}>Back</div> :
          <div>
            <div className='add topButton' onClick={this.addTask.bind(this)}>+</div>
            <div className='showCompleted topButton' onClick={this.showCompleted.bind(this)}>O</div>
          </div>
        }
        {taskList}
      </div>
    )
  }
}

export default App
