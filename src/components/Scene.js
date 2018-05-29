import React from 'react';

export default class Scene extends React.Component {
	constructor(props) {
		super(props)
		this.objects = props.children
	}

	renderObjects = () => {
		return this.objects
	}

	render() {
		return (
				<div className={'scene-container'}>
					{this.renderObjects()}
				</div>
			)
	}
}