import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Room from '../images/level5/Room.jpg'
import Books from '../images/level5/Books.png'
import Juice from '../images/level5/Juice.png'
import Seat from '../images/level5/Seat.png'
import Table from '../images/level5/Table.png'
import Wall from '../images/level5/Wall.png'
import Pen from '../images/level5/Pen.png'
import Board from '../images/level5/Board.png'
import Laptop from '../images/level5/Laptop.png'
import Bag from '../images/level5/Bag.png'
import Spot from './Spotlight.js'

export default class Level5 extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
				<Scene>
					<Sobject name={'room'} xPos={0} yPos={0}>
						<img src={Room} height="725" width="1536" />
					</Sobject>
					<Sobject name={'seat'} xPos={35} yPos={330}>
						<img src={Seat} height="390" width="390" />
					</Sobject>
					<Sobject name={'Board'} xPos={470} yPos={210}>
						<img src={Board} height="350" width="420" />
					</Sobject>
					<Sobject name={'wall'} xPos={30} yPos={30}>
						<img src={Wall} height="250" width="250"/>
					</Sobject>
					<Sobject name={'table'} xPos={1150} yPos={450}>
						<img src={Table} height="280"width="210" />
					</Sobject>
					<Sobject name={'bag'} xPos={550} yPos={560}>
						<img src={Bag} height="150" />
					</Sobject>
					<Sobject name={'laptop'} xPos={1210} yPos={210}>
						<img src={Laptop} height="190"width="290" />
					</Sobject>
					<Sobject name={'books'} xPos={1000} yPos={205}>
						<img src={Books} height="200" width="200"/>
					</Sobject>
					<Sobject name={'pen'} xPos={155} yPos={350}>
						<img src={Pen} height="100" width="100" />
					</Sobject>
					<Sobject name={'juice'} xPos={1210} yPos={380}>
						<img src={Juice} height="110" width="80" />
					</Sobject>
					<Spot height={200} width={200} color={'rgba(0,0,0,0.98)'} />
				    


					
					



				</Scene>
			)
	}
}
