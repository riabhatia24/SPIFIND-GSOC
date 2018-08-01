import React from 'react'
import PropTypes from 'prop-types';

export default class Score extends React.Component {
	constructor(props){
    super(props)
    }


    render(){
    	return <h1 className={'text'}>Score- {this.props.count}</h1>
    }


}

Score.propTypes = {

  count: PropTypes.number
}

