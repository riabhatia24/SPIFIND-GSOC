import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Test from '../images/htp/Tuitorial1.gif'
import Ted from '../images/htp/Bear1.gif'
import Wall from '../images/htp/wallpaper.png'
import Info from '../images/htp/Step.png'
import Htp from '../images/htp/Heading.png'
import {Link} from 'react-router-dom'
import Black from '../images/htp/Black.png'






export default class Htp1 extends React.Component {
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
					<Sobject name={'black'} xPos={30} yPos={198}>
						<img src={Black} height="500" width="920" />
					</Sobject>
					 <Sobject name={'ted'} xPos={950} yPos={220}>
						<img src={Ted} height="420" width="524" />
					</Sobject>
					 <Sobject name={'test'} xPos={30} yPos={198}>
						<img src={Test} height="500" width="894" />
					</Sobject>
					<Sobject name={'htp'} xPos={570} yPos={10}>
						<img src={Htp}/>
					</Sobject>
					
                    
					<Sobject name={'info'} xPos={20} yPos={105}>
						<img src={Info}/>
					</Sobject>
					
					<Link to="/htp2">
					<Sobject name={'button1'} xPos={1275} yPos={35}>
						<button className={'button'} onClick={(e) => e.stopPropagation()} >NEXT &rarr;</button>
					</Sobject>
					</Link>

					<Link to="/">
                    <Sobject name={'button2'} xPos={15} yPos={35}>
						<button className={'button'} onClick={(e) => e.stopPropagation()}>&larr; BACK</button>
					</Sobject>
					</Link>
                   
                     
                     
                     
                        
				</Scene>
				</div>
			)
	}
}

