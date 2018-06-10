import React from 'react';
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Room from '../images/level4/Room.png'
import Clock from '../images/level4/Clock.gif'
import Dustbin from '../images/level4/Dustbin.png'
import Oven from '../images/level4/Oven.png'
import Sticker from '../images/level4/Sticker.png'
import Table from '../images/level4/Table.png'
import Refrigerator from '../images/level4/Refrigerator.png'
import Teapot from '../images/level4/Teapot.gif'
import Spot from './Spotlight.js'



export default class Level4 extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
				<Scene>
					<Sobject name={'room'} xPos={0} yPos={0}>
						<img src={Room} height="755" width="1536" />
					</Sobject>
					<Sobject name={'Refrigerator'} xPos={30} yPos={150}>
						<img src={Refrigerator} height="605" width="300" />
					</Sobject>
					<Sobject name={'tabel'} xPos={350} yPos={225}>
						<img src={Table} height="530" width="530"/>
					</Sobject>
					<Sobject name={'teapot'} xPos={970} yPos={215}>
						<img src={Teapot} height="200" width="200"/>
					</Sobject>
					<Sobject name={'oven'} xPos={1200} yPos={220}>
						<img src={Oven} height="190"width="290" />
					</Sobject>
					<Sobject name={'dustbin'} xPos={1300} yPos={520}>
						<img src={Dustbin} height="190"width="200" />
					</Sobject>
					<Sobject name={'clock'} xPos={750} yPos={30}>
						<img src={Clock} height="180" width="180" />
					</Sobject>
					<Sobject name={'sticker'} xPos={180} yPos={210}>
						<img src={Sticker} height="100" width="100" />
					</Sobject>
				    <Spot height={200} width={200} color={'rgba(0,0,0,0.95)'} />




				</Scene>
			)
	}
}