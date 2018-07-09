import React from 'react'
import { withRouter } from 'react-router-dom'
import Spider from '../images/intro/Spi.gif'
import {Link} from 'react-router-dom'

class Gameover1 extends React.Component{
    constructor(props)
    {
    	super(props)
    }

    link(e){
    	 e.stopPropagation();
	this.interval=setTimeout(() =>this.props.history.push('/'), 3000)
    }
    remove(e){
    	 e.stopPropagation();
		clearTimeout(this.interval)
	}





render(){
	return <div style={{backgroundColor: '#111E6C',
      height: '670px',
      position: 'absolute',
      width: '1220px', left: '0px', top: '-650px', borderRadius: '10px'}}><h1 className={'info'}>Game Over</h1>
       <p style={{textAlign: 'center', fontSize: '40px', fontFamily: 'georgia', margin: '0', padding: '0'}}>Your Score is {this.props.score}</p>
        <Link to="/"><button style={{marginLeft: '390px', marginTop: '30px', width: '400px', height: '90px'}} className={'mainbutton2'} onMouseOver={this.link.bind(this)} onMouseOut={this.remove.bind(this)}>Go to Main Menu</button></Link>
        <img src={Spider} style={{marginLeft: '450px'}}height="300" width="300"/> 
      

      </div>


}

}
export default withRouter(Gameover1)

