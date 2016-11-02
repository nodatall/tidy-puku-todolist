import React from 'react'
import TaskList from './TaskList.jsx'
import $ from 'jquery'
import ReactCSSTransitionReplace from 'react-css-transition-replace'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      showCompletedFlag: false
    }
    this.loadTasks()
  }

  order(tasks) {
    let max = 0, min = Infinity
    let results = []

    tasks.forEach( task => {
      if (task.ordering > max) max = task.ordering
      if (task.ordering < min) min = task.ordering
    })

    for ( let i = min; i <= max; i++ ) {
      results.push(tasks.filter( task => task.ordering === i )[0])
    }

    return results
  }

  loadTasks() {
    $.ajax({
      method: 'GET',
      url: '/getAll',
      // contentType: 'application/json',
      dataType: 'json',
    }).then(tasks => {
      this.setState({tasks: this.order(tasks)})
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
        <ReactCSSTransitionReplace
          transitionName="cross-fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500} >
          <div key={`${this.state.showCompletedFlag}1234`}>
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
          </div>
        </ReactCSSTransitionReplace>
      </div>
    )
  }
}

export default App
