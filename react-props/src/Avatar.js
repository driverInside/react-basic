import React, { Component } from 'react';

class Avatar extends Component {

	render(){
		return(
			<div>
				<a href={this.props.path}>
					<img src={this.props.path} alt="you are awesome"/>
				</a>
			</div>
		);
	}
}

Avatar.defaultProps = {
	path : 'http://i.imgur.com/q1X4JrD.gif'
};

export default Avatar;