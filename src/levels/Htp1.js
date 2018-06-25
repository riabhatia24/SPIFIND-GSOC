import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Test from '../images/htp/sp.gif'
import Ted from '../images/htp/Ted.gif'
import Wall from '../images/htp/wallpaper.png'
import Info from '../images/htp/Info.png'
import Button1 from '../images/htp/Button1.png'
import Button2 from '../images/htp/Button2.png'
import Htp from '../images/htp/htp.png'
import {Link} from 'react-router-dom'
import Confused from '../images/htp/confused.png'



export default class Htp1 extends React.Component {
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
					 <Sobject name={'main'} xPos={1090} yPos={220}>
						<img className="image" src={Ted} height="300" width="400" />
					</Sobject>
					 <Sobject name={'main'} xPos={50} yPos={188}>
						<img className="image" src={Test} height="560" width="1000" />
					</Sobject>
					<Sobject name={'main'} xPos={500} yPos={10}>
						<img className="image" src={Htp}/>
					</Sobject>
					<Sobject name={'main'} xPos={930} yPos={10}>
						<img className="image" src={Confused} width="90" height="90" />
					</Sobject>
                    
					<Sobject name={'main'} xPos={30} yPos={90}>
						<img className="image" src={Info}/>
					</Sobject>
                    
                    <Link to="/">
					 <Sobject name={'main'} xPos={1120} yPos={550}>
						<img  src={Button1} height="150" width="150" />
					</Sobject>
					</Link>
					 <Link to="/htp2">
					 <Sobject name={'main'} xPos={1320} yPos={550}>
						<img  src={Button2} height="150" width="150" />
					</Sobject>
					</Link>
                    
                    
                     
                     
                     
                     
                        
				</Scene>
				</div>
			)
	}
}
