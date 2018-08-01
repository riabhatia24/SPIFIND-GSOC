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



export default class Intro extends React.Component {
	constructor(props) {
		super(props)
	}

    
	
	render() {
		return (
			    <div>

				<Scene>
				   
				    <Sobject name={'main'} xPos={0} yPos={0}>
						<img className="image" src={Main} height="725" width="1495" />
					</Sobject>
					<Sobject name={'grass'} xPos={1080} yPos={435}>
						<img src={Grass}  height="300" />
					</Sobject>
					<Sobject name={'house'} xPos={960} yPos={230}>
						<img src={House} height="505" width="510"  />
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
					
					<Sobject name={'heading'} xPos={470} yPos={2}>
						<img src={Heading2}  />
					</Sobject>
					
                
                      <Link to="/htp1">
                      <Sobject name={'playnow'} xPos={570} yPos={165}>
						 <button className={'mainbutton1'} onClick={(e) => e.stopPropagation()} >How to Play?</button>
						</Sobject>
                      </Link>
                       <Sobject name={'spider'} xPos={529} yPos={148}>
						<img src={Spider2} height="100" width="100" />
                      </Sobject>
                      <Link to="/level1">
                      <Sobject name={'playnow'} xPos={618} yPos={290}>
						
						<button className={'mainbutton2'} onClick={(e) => e.stopPropagation()}>Level-1</button>
                      </Sobject>
                      </Link>
                      <Link to="/level2">
                      <Sobject name={'playnow'} xPos={618} yPos={380}>
						
						<button className={'mainbutton2'} onClick={(e) => e.stopPropagation()} >Level-2</button>
                      </Sobject>
                      </Link>
                      <Link to="/level3">
                      <Sobject name={'playnow'} xPos={618} yPos={470}>
						
						<button className={'mainbutton2'} onClick={(e) => e.stopPropagation()}>Level-3</button>
                      </Sobject>
                      </Link>
                      
                      <Link to="/level4">
                      <Sobject name={'playnow'} xPos={618} yPos={560}>
						
						<button className={'mainbutton2'} onClick={(e) => e.stopPropagation()}>Level-4</button>
                      </Sobject>
                      </Link>
                      
                      <Link to="/level5">
                       <Sobject name={'playnow'} xPos={618} yPos={650}>
						
						<button className={'mainbutton2'} onClick={(e) => e.stopPropagation()}>Level-5</button>
                      </Sobject>
                      </Link>
                     

                      
                     
                     
                     
                     
                        
				</Scene>
				</div>
			)
	}
}

