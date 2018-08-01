import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Test from '../images/htp/Tuitorial2.gif'
import Info from '../images/htp/Step3.png'
import Wall from '../images/htp/wallpaper.png'
import Ted from '../images/htp/Bear.gif'
import Timer from '../images/htp/Clock.gif'
import Black from '../images/htp/Black.png'
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
					<Sobject name={'black'} xPos={50} yPos={198}>
						<img src={Black} height="520" width="894" />
					</Sobject>
					<Sobject name={'timer'} xPos={960} yPos={465}>
						<img src={Timer} height="300" width="550"  />
					</Sobject>
					<Sobject name={'ted'} xPos={960} yPos={190}>
						<img src={Ted} height="330" width="510" />
					</Sobject>
					 <Sobject name={'test'} xPos={50} yPos={198}>
						<img src={Test} height="520" width="874" />
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
