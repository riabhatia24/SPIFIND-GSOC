import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Main from '../images/intro/Main.jpg'
import House from '../images/intro/House2.png'
import Tree from '../images/intro/Tree.png'
import Grass from '../images/intro/Grass.png'
import Heading2 from '../images/intro/Heading2.png'
import Spider1 from '../images/intro/Spi.gif'
import Spider2 from '../images/intro/spider1.png'
import {Link} from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player'
import Title from '../audio/Title.mp3'
import { withRouter } from 'react-router-dom'


class Intro extends React.Component {
	constructor(props) {
		super(props)
	}

    link(){
	this.interval=setTimeout(() =>this.props.history.push('/htp1'), 8000)
    }
    link1(){
	this.interval=setTimeout(() =>this.props.history.push('/level1'), 8000)
    }
    link2(){
	this.interval=setTimeout(() =>this.props.history.push('/level2'), 8000)
    }
    link3(){
	this.interval=setTimeout(() =>this.props.history.push('/level3'), 8000)
    }
    link4(){
	this.interval=setTimeout(() =>this.props.history.push('/level4'), 8000)
    }
    link5(){
	this.interval=setTimeout(() =>this.props.history.push('/level5'), 8000)
    }
    remove(){
		clearTimeout(this.interval)
	}
	
	render() {
		return (
			    <div>

				<Scene>
				    <ReactAudioPlayer src={Title} controls loop volume={1} autoPlay/>
				    <Sobject name={'main'} xPos={0} yPos={0}>
						<img className="image" src={Main} height="755" width="1536" />
					</Sobject>
					<Sobject name={'house'} xPos={960} yPos={180}>
						<img src={House} height="575" width="575"  />
					</Sobject>
					<Sobject name={'tree'} xPos={15} yPos={160} >
						<img src={Tree}  />
					</Sobject>
					<Sobject name={'Spider'} xPos={125} yPos={380}>
						<img src={Spider1} width="120" height="120"  />
					</Sobject>
					<Sobject name={'Spider'} xPos={260} yPos={400}>
						<img src={Spider1} width="130" height="130"  />
					</Sobject>
					
				    <Sobject name={'grass'} xPos={0} yPos={455}>
						<img src={Grass} height="300"  />
					</Sobject>
					<Sobject name={'grass'} xPos={430} yPos={455}>
						<img src={Grass}  height="300" />
					</Sobject>
					<Sobject name={'grass'} xPos={730} yPos={455}>
						<img src={Grass}  height="300" />
					</Sobject>	
					<Sobject name={'grass'} xPos={1080} yPos={455}>
						<img src={Grass}  height="300" />
					</Sobject>
					<Sobject name={'heading'} xPos={470} yPos={10}>
						<img src={Heading2}  />
					</Sobject>
					
                
                      <Link to="/htp1">
                      <Sobject name={'playnow'} xPos={599} yPos={180}>
						 <button className={'mainbutton1'} onMouseOver={this.link.bind(this)} onMouseOut={this.remove.bind(this)}>How to Play?</button>
						</Sobject>
                      </Link>
                       <Sobject name={'spider'} xPos={549} yPos={148}>
						<img src={Spider2} height="100" width="100" />
                      </Sobject>
                      <Link to="/level1">
                      <Sobject name={'playnow'} xPos={618} yPos={290}>
						
						<button className={'mainbutton2'} onMouseOver={this.link1.bind(this)} onMouseOut={this.remove.bind(this)}>Level-1</button>
                      </Sobject>
                      </Link>
                      <Link to="/level2">
                      <Sobject name={'playnow'} xPos={618} yPos={360}>
						
						<button className={'mainbutton2'} onMouseOver={this.link2.bind(this)} onMouseOut={this.remove.bind(this)}>Level-2</button>
                      </Sobject>
                      </Link>
                      <Link to="/level3">
                      <Sobject name={'playnow'} xPos={618} yPos={430}>
						
						<button className={'mainbutton2'} onMouseOver={this.link3.bind(this)} onMouseOut={this.remove.bind(this)}>Level-3</button>
                      </Sobject>
                      </Link>
                      
                      <Link to="/level4">
                      <Sobject name={'playnow'} xPos={618} yPos={500}>
						
						<button className={'mainbutton2'} onMouseOver={this.link4.bind(this)} onMouseOut={this.remove.bind(this)}>Level-4</button>
                      </Sobject>
                      </Link>
                      
                      <Link to="/level5">
                       <Sobject name={'playnow'} xPos={618} yPos={570}>
						
						<button className={'mainbutton2'} onMouseOver={this.link5.bind(this)} onMouseOut={this.remove.bind(this)}>Level-5</button>
                      </Sobject>
                      </Link>
                     

                      
                     
                     
                     
                     
                        
				</Scene>
				</div>
			)
	}
}

export default withRouter(Intro)
