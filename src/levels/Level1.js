import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Room from '../images/level1/Room.png'
import Bed from '../images/level1/Bed.png'
import Duck from '../images/level1/Duck.png'
import Toy1 from '../images/level1/Toy1.png'
import Window from '../images/level1/Window2.jpg'
import Curtain from '../images/level1/Curtain.png'
import Vase from '../images/level1/Vase.png'
import Painting from '../images/level1/Painting.jpg'
import Aqua from '../images/level1/aqua.gif'
import Horse from '../images/level1/Horse.png'
import Car from '../images/level1/Car.png'
import Spot from './Spotlight.js'
import Score from '../score/Score.js'
import Countdown from 'react-countdown-now';
import Gameover1 from '../score/Gameover.js'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'


class Level1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
			
		}
	}

	 link(e){
    e.stopPropagation();
	this.interval=setTimeout(() =>this.props.history.push('/'), 3000)
    }
    remove(e){
    e.stopPropagation();
    clearTimeout(this.interval)
	}
    
   render() {
		return (
			    <div>
                	
				<Scene>
				    
				     
					<Sobject name={'room'} xPos={0} yPos={0}>
						<img src={Room} height="725" width="1536" />
					</Sobject>
					<Sobject name={'bed'} xPos={20} yPos={280}>
						<img src={Bed} height="445" width="850"/>
					</Sobject>
					<Sobject name={'window'} xPos={20} yPos={20}>
						<img src={Window} height="250" width="320" />
					</Sobject>
					<Sobject name={'curtain'} xPos={20} yPos={20}>
						<img src={Curtain} height="200" width="320" />
					</Sobject>
					<Sobject name={'vase'} xPos={1000} yPos={100}>
						<img className={'vase'} src={Vase} height="300"/>
					</Sobject>
					<Sobject name={'duck'} xPos={30} yPos={570}>
						<img src={Duck} height="150" />
					</Sobject>
					<Sobject name={'toy1'} xPos={870} yPos={520}>
						<img src={Car} className={'car'} height="200" width="350" />
					</Sobject>
					<Sobject name={'toy3'} xPos={1220} yPos={440}>
						<img src={Horse} className={'horse'} height="250" width="280" />
					</Sobject>
                    <Sobject name={'toy1'} xPos={380} yPos={270}>
						<img src={Toy1} height="250" width="200" />
					</Sobject>
					<Sobject name={'painting'} xPos={726} yPos={80}>
						<img src={Painting} height="150" />
					</Sobject>
					<Sobject name={'Aqua'} xPos={1230} yPos={169}>
						<img src={Aqua} height="230" width="230" />
					</Sobject>
					 <Spot height={200} width={200} color={'rgba(0,0,0,0.91)'} />
					<Sobject name={'score'} xPos={1360} yPos={640}>
						<Score count={this.state.count}/>
					</Sobject>
					<Sobject name={'score'} xPos={700} yPos={665}>
						<Link to="/"><button onMouseEnter={this.link.bind(this)} onMouseLeave={this.remove.bind(this)} className={'quit'}>Quit</button></Link>
					</Sobject>
					<Sobject name={'score'} xPos={40} yPos={640}>
						<h1  className={'score'}>Timer-</h1>
					</Sobject>
					<Sobject name={'score'} xPos={150} yPos={678}>
						<Countdown date={Date.now() + 511000}>
                         <Gameover1 score={this.state.count} />
                         </Countdown>

					</Sobject>

                    </Scene>

				
				</div>
			)
	}
}

export default withRouter(Level1)
