import React from 'react';
import PropTypes from 'prop-types';

export default class Sobject extends React.Component {
	constructor(props) {
		super(props)
		this.name = props.name | ''
		this.type = 'generic'
		this.xPos = props.xPos | 0
		this.yPos = props.yPos | 0
		
	}

	render() {
		return (
			<div className={'object-container'} style={{ left: this.xPos, top: this.yPos }}>
				{this.props.children}
			</div>
		)
	}
}


Sobject.propTypes = {

  name: PropTypes.string,
  xPos: PropTypes.number,
  yPos: PropTypes.number,

}
