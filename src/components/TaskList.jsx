import React from 'react'
import Task from './Task.jsx'

class TaskList extends React.Component {

  render() {
    const tasks = this.props.tasks.map( (task, index) => {
      return <Task task={task.text} taskId={task.id} key={task.id} />
    })
    return <div className="tasksContainer">{tasks}</div>
  }
}

// TaskList.propTypes = {
//   tasks: React.PropTypes.array.isRequired,
// }

export default TaskList
