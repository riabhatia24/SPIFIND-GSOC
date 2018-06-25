import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Spot from '../images/htp/Spotit.gif'
import Info from '../images/htp/Info2.png'
import Wall from '../images/htp/wallpaper.png'
import Ted from '../images/htp/Ted2.gif'
import Button1 from '../images/htp/Button1.png'
import Button2 from '../images/htp/Button2.png'
import {Link} from 'react-router-dom'



export default class Htp2 extends React.Component {
	constructor(props) {
		super(props)
	}

	
	render() {
		return (
			    <div>

				<Scene>
				    <Sobject name={'main'} xPos={0} yPos={0}>
						<img className="image" src={Wall} height="755" width="1536" />
					</Sobject>
					<Sobject name={'main'} xPos={50} yPos={178}>
						<img className="image" src={Spot} height="560" width="1000" />
					</Sobject>
					 <Sobject name={'main'} xPos={1090} yPos={220}>
						<img className="image" src={Ted} height="300" width="400" />
					</Sobject>
				    <Sobject name={'main'} xPos={20} yPos={40}>
						<img className="image" src={Info}/>
					</Sobject>
                     
                    <Link to="/htp1">
					 <Sobject name={'main'} xPos={1120} yPos={550}>
						<img  src={Button1} height="150" width="150" />
					</Sobject>
					</Link>
					 <Link to="/level1">
					 <Sobject name={'main'} xPos={1320} yPos={550}>
						<img  src={Button2} height="150" width="150" />
					</Sobject>
					</Link>
                    
                    
                                 
                     
                     
                        
				</Scene>
				</div>
			)
	}
}
