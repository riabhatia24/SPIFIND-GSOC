import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Main from '../images/intro/Main.jpg'
import House1 from '../images/intro/House1.png'
import Tree from '../images/intro/Tree.png'
import Light from '../images/intro/Nlight2.gif'
import Grass from '../images/intro/Grass.png'
import Heading2 from '../images/intro/Heading2.png'
import Light2 from '../images/intro/Nlight.gif'
import Play from '../images/intro/Play.png'
import Spider1 from '../images/intro/Spi.gif'
import Text from '../images/intro/Text.png'
import Spider2 from '../images/intro/spider1.png'
import {Link} from 'react-router-dom'
import Play1 from '../images/intro/Play1.png'
import Play2 from '../images/intro/Play2.png'
import Play3 from '../images/intro/Play3.png'
import Play4 from '../images/intro/Play4.png'
import Play5 from '../images/intro/Play5.png'




export default class Intro extends React.Component {
	constructor(props) {
		super(props)
	}

	
	render() {
		return (
			    <div>

				<Scene>
				    <Sobject name={'main'} xPos={0} yPos={0}>
						<img className="image" src={Main} height="755" width="1536" />
					</Sobject>
					<Sobject name={'house'} xPos={940} yPos={50}>
						<img src={House1} height="705" width="590"  />
					</Sobject>
					<Sobject name={'tree'} xPos={15} yPos={160}>
						<img src={Tree}  />
					</Sobject>
					<Sobject name={'Spider'} xPos={125} yPos={380}>
						<img src={Spider1} width="120" height="120"  />
					</Sobject>
					<Sobject name={'Spider'} xPos={260} yPos={400}>
						<img src={Spider1} width="130" height="130"  />
					</Sobject>
					<Sobject name={'light'} xPos={0} yPos={0}>
						<img src={Light} width="160" height="200" />
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
					<Sobject name={'light2'} xPos={1368} yPos={0}>
						<img src={Light2} width="160" height="200" />
					</Sobject>
                 
                 <Link to="/htp1">
    
                   <Sobject name={'playnow'} xPos={569} yPos={180}>
						
						<img src={Play} />
                      </Sobject>

                   <Sobject name={'text'} xPos={569} yPos={198}>
						
						<img src={Text} />
                      </Sobject>
                      </Link>
                      
                       <Sobject name={'spider'} xPos={529} yPos={148}>
						
						<img src={Spider2} height="100" width="100" />
                      </Sobject>
                      
                      <Link to="/level1">
                      <Sobject name={'playnow'} xPos={579} yPos={290}>
						
						<img src={Play1} />
                      </Sobject>
                      </Link>
                     <Link to="/level2">
                     <Sobject name={'playnow'} xPos={579} yPos={360}>
						
						<img src={Play2} />
                      </Sobject>
                      </Link>
                      <Link to="/level3">
                       <Sobject name={'playnow'} xPos={579} yPos={430}>
						
						<img src={Play3} />
                      </Sobject>
                      </Link>
                      <Link to="/level4">
                      <Sobject name={'playnow'} xPos={579} yPos={500}>
						
						<img src={Play4} />
                      </Sobject>
                      </Link>
                      <Link to="/level5">
                      <Sobject name={'playnow'} xPos={579} yPos={570}>
						
						<img src={Play5} />
                      </Sobject>
                      </Link>
                      
                     
                     
                     
                     
                        
				</Scene>
				</div>
			)
	}
}
