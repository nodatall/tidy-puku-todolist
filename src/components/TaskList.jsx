import React from 'react'
import Task from './Task.jsx'

class TaskList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const tasks = this.props.tasks.map( (task, index) => {
      return <Task task={task.text} taskId={task.id} key={task.id} />
    })
    return (
      <div>
        <div>{tasks}</div>
      </div>
    )
  }
}

// TaskList.propTypes = {
//   tasks: React.PropTypes.array.isRequired,
// }

export default TaskList
