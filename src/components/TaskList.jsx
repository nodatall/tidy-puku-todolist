import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Task from './Task.jsx'

class TaskList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dragging: false,
      reordering: false
    }
  }

  setDragging(dragging) {
    this.setState({dragging: dragging})
  }

  setReordering(reordering) {
    this.setState({reordering: reordering})
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
                reordering={this.state.reordering}
                setDragging={this.setDragging.bind(this)}
                setReordering={this.setReordering.bind(this)}
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
