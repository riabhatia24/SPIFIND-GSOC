import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Wall from '../images/htp/wallpaper.png'
import House from '../images/htp/House.gif'
import Grass from '../images/intro/Grass.png'
import Ready from '../images/htp/Ready1.png'
import Board from '../images/htp/Board.gif'
import Web from '../images/htp/Web.png'
import { Link } from 'react-router-dom'




export default class Htp3 extends React.Component {
	constructor(props) {
		super(props)
	}
   
	render() {
		return (
			    <div>

				<Scene>
				    <Sobject name={'main'} xPos={0} yPos={0}>
						<img src={Wall} height="755" width="1495" />
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
					<Sobject name={'button1'} xPos={30} yPos={285}>
						<button className={'button2'} onClick={(e) => e.stopPropagation()} >&larr; BACK</button>
					</Sobject>
					</Link>
					<Link to="/level1">
					<Sobject name={'button2'} xPos={1080} yPos={285}>
						<button className={'button2'} onClick={(e) => e.stopPropagation()} >LEVEL-1 &rarr;</button>
					</Sobject>
					</Link>
					<Sobject name={'spider'} xPos={1290} yPos={0}>
						<img src={Web} height="200" width="200"/>
					</Sobject>
					
					
					
                     
                     
                     
                        
				</Scene>
				</div>
			)
	}
}
