import React from 'react'
import Task from './Task.jsx'

class TaskList extends React.Component {

  render() {
    const filteredTasks = this.props.tasks.filter( task => this.props.showCompletedFlag ? task.completed : !task.completed
    )
    const tasks = filteredTasks.map( (task, index) => {
      return <Task task={task.text} taskId={task.id} loadTasks={this.props.loadTasks} key={task.id} />
    })
    return <div className="tasksContainer">{tasks}</div>
  }
}

export default TaskList
