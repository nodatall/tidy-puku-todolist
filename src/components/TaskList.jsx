import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Task from './Task.jsx'

class TaskList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dragging: false
    }
  }

  setDragging(dragging) {
    this.setState({dragging: dragging})
  }

  render() {
    const filteredTasks = this.props.tasks.filter( task => this.props.showCompletedFlag ? task.completed : !task.completed
    )
    const tasks = filteredTasks.map( (task, index) => {
      return <Task
                taskText={task.text}
                taskId={task.id}
                loadTasks={this.props.loadTasks}
                completed={task.completed}
                key={task.id}
                addTask={this.props.addTask}
                dragging={this.state.dragging}
                setDragging={this.setDragging.bind(this)}
              />
    })
    return <div className="tasksContainer">
      <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
          {tasks}
      </ReactCSSTransitionGroup>
    </div>
  }
}

export default TaskList
