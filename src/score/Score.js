import React from 'react'


export default class Score extends React.Component {
	constructor(props){
    super(props)
    }


    render(){
    	return <h1 className={'text'}>Score- {this.props.count}</h1>
    }


}