import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Room from '../images/level3/Main.png'
import Bathtub from '../images/level3/Bathtub.png'
import Brush from '../images/level3/Brush.png'
import Bubbles from '../images/level3/Bubbles.gif'
import Duck from '../images/level3/Duck.gif'
import Handwash from '../images/level3/Handwash.png'
import Laundry from '../images/level3/Laundry.png'
import Seat from '../images/level3/Seat.png'
import Shampoo from '../images/level3/Shampoo.png'
import Towel from '../images/level3/Towel.png'
import Still from '../images/level3/StillBubbles.png'
import Ball from '../images/level3/Ball.png'
import Fan from '../images/level3/Fan.gif'
import Spot from './Spotlight.js'
import Score from '../score/Score.js'
import Countdown from 'react-countdown-now';
import Gameover1 from '../score/Gameover.js'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'


class Level3 extends React.Component {
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
				<Scene>
				 
					<Sobject name={'room'} xPos={0} yPos={0}>
						<img src={Room} height="725" width="1536" />
					</Sobject>
					<Sobject name={'seat'} xPos={30} yPos={250}>
						<img src={Seat} height="475" />
					</Sobject>
					<Sobject name={'Bathtub'} xPos={920} yPos={400}>
						<img src={Bathtub} width="560"  />
					</Sobject>
					<Sobject name={'sbubbles'} xPos={995} yPos={340}>
						<img src={Still} height="180" width="180"  />
					</Sobject>
					<Sobject name={'bubbles'} xPos={1005} yPos={300}>
						<img src={Bubbles} height="200" width="200"  />
					</Sobject>
					<Sobject name={'sbubbles'} xPos={1200} yPos={360}>
						<img src={Still} height="180" width="180"  />
					</Sobject>
					<Sobject name={'bubbles'} xPos={1205} yPos={300}>
						<img src={Bubbles} height="200" width="200"  />
					</Sobject>
					<Sobject name={'duck'} xPos={1120} yPos={325}>
						<img src={Duck} height="200" width="200"  />
					</Sobject>
					<Sobject name={'towel'} xPos={750} yPos={200}>
						<img className={'towel'} src={Towel} height="200" width="200"/>
					</Sobject>
					<Sobject name={'ball'} xPos={550} yPos={580}>
						<img src={Ball} className={'ball'} height="130" width="130"/>
					</Sobject>
					<Sobject name={'laundry'} xPos={490} yPos={300}>
						<img src={Laundry} className={'laundry'} height="200" width="150"/>
					</Sobject>
					<Sobject name={'Handwash'} xPos={1100} yPos={280}>
						<img src={Handwash} className={'handwash'} height="120" width="90"/>
					</Sobject>
					<Sobject name={'fan'} xPos={55} yPos={30}>
						<img src={Fan} height="150" width="150"/>
					</Sobject>
					<Sobject name={'Shampoo'} xPos={1240} yPos={270}>
						<img src={Shampoo} className={'shampoo'} height="120" width="50" />
					</Sobject>
					<Sobject name={'brush'} xPos={1325} yPos={360}>
						<img src={Brush} height="40" width="120" />
					</Sobject>
					<Spot height={200} width={200} color={'rgba(0,0,0,0.95)'} />
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
						<Countdown date={Date.now() + 336000}>
                         <Gameover1 score={this.state.count} />
                         </Countdown>

					</Sobject>
					
					

					
					



				</Scene>
			)
	}
}


export default withRouter(Level3)
