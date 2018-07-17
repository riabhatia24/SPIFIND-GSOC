import React from 'react'
import { withRouter } from 'react-router-dom'
import Spider from '../images/intro/Spi.gif'
import {Link} from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player'
import Gameover from '../audio/Gameover.mp3'

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
      height: '650px',
      position: 'absolute',
      width: '1450px', left: '-670px', top: '-630px', borderRadius: '10px'}}><h1 className={'info'}>Game Over</h1>
       <p style={{textAlign: 'center', fontSize: '40px', fontFamily: 'georgia', margin: '0', padding: '0'}}>Your Score is {this.props.score}</p>
        <Link to="/"><button style={{marginLeft: '540px', marginTop: '30px', width: '400px', height: '90px'}} className={'mainbutton2'} onClick={(e) => e.stopPropagation()}>Go to Main Menu</button></Link>
        <img src={Spider} style={{marginLeft: '600px'}}height="300" width="300"/> 
          <ReactAudioPlayer src={Gameover} controls volume={0.6} autoPlay style={{display: 'none'}}/>

      

      </div>


}

}
export default withRouter(Gameover1)

