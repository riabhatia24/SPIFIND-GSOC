import React from 'react';
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
import Laptop from '../images/level5/Laptop.gif'
import Book from '../images/level5/Book.gif'
import Spot from './Spotlight.js'

export default class Level5 extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
				<Scene>
					<Sobject name={'room'} xPos={0} yPos={0}>
						<img src={Room} height="755" width="1536" />
					</Sobject>
					<Sobject name={'seat'} xPos={35} yPos={340}>
						<img src={Seat} height="410" width="410" />
					</Sobject>
					<Sobject name={'Board'} xPos={470} yPos={210}>
						<img src={Board} height="350" width="420" />
					</Sobject>
					<Sobject name={'wall'} xPos={30} yPos={30}>
						<img src={Wall} height="250" width="250"/>
					</Sobject>
					<Sobject name={'table'} xPos={1150} yPos={470}>
						<img src={Table} height="280"width="210" />
					</Sobject>
					<Sobject name={'book'} xPos={550} yPos={610}>
						<img src={Book} height="120" />
					</Sobject>
					<Sobject name={'laptop'} xPos={1210} yPos={220}>
						<img src={Laptop} height="190"width="290" />
					</Sobject>
					<Sobject name={'books'} xPos={1000} yPos={215}>
						<img src={Books} height="200" width="200"/>
					</Sobject>
					<Sobject name={'pen'} xPos={155} yPos={370}>
						<img src={Pen} height="100" width="100" />
					</Sobject>
					<Sobject name={'juice'} xPos={1210} yPos={390}>
						<img src={Juice} height="110" width="80" />
					</Sobject>
				    <Spot height={200} width={200} color={'rgba(0,0,0,0.96)'} />


					
					



				</Scene>
			)
	}
}