import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Wall from '../images/htp/wallpaper.png'
import House from '../images/htp/House.gif'
import Grass from '../images/intro/Grass.png'
import Ready from '../images/htp/Ready1.png'
import Board from '../images/htp/Board.gif'
import Web from '../images/htp/Web.png'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'




class Htp3 extends React.Component {
	constructor(props) {
		super(props)
	}
    link1(){
	this.interval=setTimeout(() =>this.props.history.push('/'), 3500)
	console.log('mouseenter')
    }
    link2(){
	this.interval=setTimeout(() =>this.props.history.push('/level1'), 3500)
	
    }
    remove(){
		clearTimeout(this.interval)
		console.log('mouseleave')
	}
	
	
	render() {
		return (
			    <div>

				<Scene>
				    <Sobject name={'main'} xPos={0} yPos={0}>
						<img src={Wall} height="755" width="1536" />
					</Sobject>
					<Sobject name={'house'} xPos={490} yPos={180}>
						<img src={House} height="575" width="705"   />
					</Sobject>
					 <Sobject name={'grass'} xPos={0} yPos={525}>
						<img src={Grass} height="230"  />
					</Sobject>
					
					<Sobject name={'board'} xPos={400} yPos={500}>
						<img src={Board} height="250" />
					</Sobject>
					<Sobject name={'grass'} xPos={325} yPos={525}>
						<img src={Grass}  height="230" />
					</Sobject>
					<Sobject name={'grass'} xPos={958} yPos={525}>
						<img src={Grass}  height="230" />
					</Sobject>	
					<Sobject name={'grass'} xPos={1180} yPos={525}>
						<img src={Grass}  height="230" />
					</Sobject>
						<Sobject name={'info'} xPos={20} yPos={45}>
						<img src={Ready}/>
					</Sobject>
					<Link to="/htp2">
					<Sobject name={'info'} xPos={30} yPos={285}>
						<button className={'button2'} onMouseEnter={this.link1.bind(this)} onMouseLeave={this.remove.bind(this)}>&larr; BACK</button>
					</Sobject>
					</Link>
					<Link to="/level1">
					<Sobject name={'info'} xPos={1100} yPos={285}>
						<button className={'button2'} onMouseEnter={this.link2.bind(this)} onMouseLeave={this.remove.bind(this)}>LEVEL-1 &rarr;</button>
					</Sobject>
					</Link>
					<Sobject name={'info'} xPos={1290} yPos={0}>
						<img src={Web} height="200" width="200"/>
					</Sobject>
					
					
					
                     
                     
                     
                        
				</Scene>
				</div>
			)
	}
}
export default withRouter(Htp3)