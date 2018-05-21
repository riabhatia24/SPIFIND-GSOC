import React from 'react';

export default class Scene extends React.Component {
	constructor(props) {
		super(props)
		this.objects = []
	}

	renderObjects = () => {
		return (<div></div>)
	}

	render() {
		return (
				<div className={'scene-container'}>
					{this.renderObjects()}
				</div>
			)
	}
}
