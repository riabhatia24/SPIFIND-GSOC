import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Info from '../images/htp/Step3.png'
import Wall from '../images/htp/wallpaper.png'
import Ted from '../images/htp/Tuitorial2.gif'
import Htp from '../images/htp/Heading2.png'
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
						<img src={Wall} height="755" width="1495" />
					</Sobject>
					
					<Sobject name={'ted'} xPos={30} yPos={140}>
						<img src={Ted} height="600" width="1434" />
					</Sobject>
					
					
					<Sobject name={'htp'} xPos={570} yPos={10}>
						<img src={Htp}/>
					</Sobject>
					<Sobject name={'info'} xPos={0} yPos={105}>
						<img src={Info}/>
					</Sobject>
					
					<Link to="/htp3">
					<Sobject name={'button1'} xPos={1275} yPos={35}>
						<button className={'button'} onClick={(e) => e.stopPropagation()} >NEXT &rarr;</button>
					</Sobject>
					</Link>

					<Link to="/htp1">
                    <Sobject name={'button2'} xPos={15} yPos={35}>
						<button className={'button'} onClick={(e) => e.stopPropagation()}>&larr; BACK</button>
					</Sobject>
					</Link>
                   
                     
                     
                     
                        
				</Scene>
				</div>
			)
	}
}
