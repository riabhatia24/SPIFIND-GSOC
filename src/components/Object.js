import React from 'react';

export default class sObject extends React.Component {
	constructor(props) {
		super(props)
		this.type = 'generic'
		this.xPos = 0
		this.yPos = 0
		this.isMoving = false
		this.render = '' 
	}
}
