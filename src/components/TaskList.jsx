import React from 'react'

class TaskList extends React.Component {

  render() {
    const tasks = this.props.tasks.map(task => {
      return <div className='task' key={task.id}>{task.text}</div>
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
