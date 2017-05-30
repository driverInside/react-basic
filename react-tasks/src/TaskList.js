import React, { Component } from 'react';

class TaskList extends Component {

	render() {

    var displayTask = (task) => <li>{ task }</li>

		return (
			<ul>
        { this.props.items.map(displayTask) }
      </ul>
		);
	}
}

export default TaskList;