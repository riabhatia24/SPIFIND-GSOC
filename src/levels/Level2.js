import React from 'react';
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Cat from '../images/level2/Cat.png'
import Room from '../images/level2/Main.jpg'
import Sofa from '../images/level2/Sofa.png'
import Table from '../images/level2/Table.png'
import Telephone from '../images/level2/Telephone.png'
import Television from '../images/level2/Television.png'
import Wall from '../images/level2/Wall.png'
import Pokemon from '../images/level2/Pokemon.gif'
import Spot from './Spotlight.js'
import Score from '../score/Score.js'
import Countdown from 'react-countdown-now';
import Gameover1 from '../score/Gameover.js'



export default class Level2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	render() {
		return (
				<Scene>
				   
					<Sobject name={'room'} xPos={0} yPos={0}>
						<img src={Room} height="725" width="1536" />
					</Sobject>
					<Sobject name={'sofa'} xPos={20} yPos={240}>
						<img src={Sofa} height="445" width="890"/>
					</Sobject>
					<Sobject name={'wall'} xPos={30} yPos={30}>
						<img src={Wall} height="200" width="200"/>
					</Sobject>
                    <Sobject name={'television'} xPos={905} yPos={200}>
						<img src={Television} width="620" height="480" />
					</Sobject>
					<Sobject name={'pokemon'} xPos={1005} yPos={220}>
						<img src={Pokemon} height="190" width="430"  />
					</Sobject>
					<Sobject name={'cat'} xPos={890} yPos={480}>
						<img src={Cat} width="250" height="250"/>
					</Sobject>
					<Sobject name={'table'} xPos={370} yPos={350}>
						<img src={Table} height="380px" width="200"/>
					</Sobject>
					<Sobject name={'telephone'} xPos={370} yPos={300}>
						<img src={Telephone} height="100px" />
					</Sobject>
					<Spot height={200} width={200} color={'rgba(0,0,0,0.94)'} />
					<Sobject name={'score'} xPos={1360} yPos={670}>
						<Score count={this.state.count}/>
					</Sobject>
					<Sobject name={'score'} xPos={50} yPos={670}>
						<h1>Timer-</h1>
					</Sobject>
					<Sobject name={'score'} xPos={160} yPos={708}>
						<Countdown date={Date.now() + 456000}>
                         <Gameover1 score={this.state.count} />
                         </Countdown>

					</Sobject>
					



				</Scene>
			)
	}
}
