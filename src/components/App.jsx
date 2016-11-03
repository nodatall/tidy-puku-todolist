import React from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import $ from 'jquery'

import Buttons from './Buttons.jsx'
import TaskList from './TaskList.jsx'

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
    return $.ajax({
      method: 'GET',
      url: '/getAll',
      dataType: 'json',
      error: (err) => {
        console.error('loadTasks ajax failure', err)
      }
    }).then(tasks => {
      this.setState({tasks: tasks})
    })
  }

  addTask() {
    $.ajax({
      method: 'POST',
      url: '/add',
      dataType: 'json',
      error: (err) => {
        console.error('addTask ajax failure', err)
      }
    }).then(result => {
      this.loadTasks.bind(this)().then( () => {
        document.getElementById('task' + result.id).focus()
      })
    })
  }

  showCompleted() {
    this.setState({showCompletedFlag: true})
  }

  showIncompleted() {
    this.setState({showCompletedFlag: false})
  }

  render() {
    const taskList = <TaskList
        tasks={this.state.tasks}
        loadTasks={this.loadTasks.bind(this)}
        showCompletedFlag={this.state.showCompletedFlag} />

    return (
      <div className='container'>
        <ReactCSSTransitionReplace
          transitionName="cross-fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500} >
          <div key={`${this.state.showCompletedFlag}Complete`}>
            <Buttons
              showCompletedFlag={this.state.showCompletedFlag}
              showCompleted={this.showCompleted.bind(this)}
              showIncompleted={this.showIncompleted.bind(this)}
              addTask={this.addTask.bind(this)}
            />
            {taskList}
          </div>
        </ReactCSSTransitionReplace>
      </div>
    )
  }
}

export default App
