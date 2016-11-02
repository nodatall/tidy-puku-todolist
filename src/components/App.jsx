import React from 'react'
import TaskList from './TaskList.jsx'
import $ from 'jquery'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
            <div className='back topButton' onClick={this.showIncompleted.bind(this)}>
              <svg width="28" height="28">
                <path d="M 11, 6 L 3, 14 L 11, 22" fill="none"/>
                <line x1="4" y1="14" x2="25" y2="14" />
              </svg>
            </div> :
            <div className='buttonContainer'>
              <div className='add topButton' onClick={this.addTask.bind(this)}>
                <svg width="28" height="28">
                  <line x1="14" y1="3" x2="14" y2="25" />
                  <line x1="3" y1="14" x2="25" y2="14" />
                </svg>
              </div>
              <div className='showCompleted topButton' onClick={this.showCompleted.bind(this)}>
                <svg width="28" height="28">
                  <circle cx="14" cy="14" r="12" fill="none"/>
                  <path id="check" d="M 6, 15 L 12, 21 L 20, 9" fill="none"/>
                </svg>
              </div>
            </div>
          }

          {taskList}
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        {this.state.showCompletedFlag ? <h1 key='109858'>One</h1> : <h1 key='5445454'>Two</h1>}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default App
