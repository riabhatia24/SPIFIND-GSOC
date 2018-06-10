import React from 'react';
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Room from '../images/level1/Room.png'
import Bed from '../images/level1/Bed.png'
import Duck from '../images/level1/Duck.png'
import Toy1 from '../images/level1/Toy1.png'
import Window from '../images/level1/Window.gif'
import Toy2 from '../images/level1/Toy2.png'
import Curtain from '../images/level1/Curtain.png'
import Vase from '../images/level1/Vase.png'
import Painting from '../images/level1/Painting.jpg'
import Book from '../images/level1/Book.gif'
import Fan from '../images/level1/Fan.gif'
import Spot from './Spotlight.js'


export default class Level1 extends React.Component {
	constructor(props) {
		super(props)
	}

	click(){
		console.log('hi')
	}

	render() {
		return (
			    <div>
                	
				<Scene>
				    
				
					<Sobject name={'room'} xPos={0} yPos={0}>
						<img src={Room} height="755" width="1536" onClick={this.click.bind(this)}/>
					</Sobject>
					<Sobject name={'bed'} xPos={20} yPos={300}>
						<img src={Bed} height="445" width="850" />
					</Sobject>
					<Sobject name={'window'} xPos={20} yPos={20}>
						<img src={Window} />
					</Sobject>
					<Sobject name={'curtain'} xPos={20} yPos={20}>
						<img src={Curtain} height="200" width="320" />
					</Sobject>
					<Sobject name={'vase'} xPos={1000} yPos={110}>
						<img src={Vase} height="300" />
					</Sobject>
					<Sobject name={'duck'} xPos={30} yPos={600}>
						<img src={Duck} height="150" />
					</Sobject>
					<Sobject name={'toy1'} xPos={950} yPos={450}>
						<img src={Toy1} height="300" />
					</Sobject>
					<Sobject name={'toy2'} xPos={1200} yPos={550}>
						<img src={Toy2} height="200" />
					</Sobject>
                    <Sobject name={'book'} xPos={380} yPos={410}>
						<img src={Book} height="120" />
					</Sobject>
					<Sobject name={'painting'} xPos={726} yPos={80}>
						<img src={Painting} height="150" />
					</Sobject>
					<Sobject name={'fan'} xPos={1110} yPos={69}>
						<img src={Fan} height="380" width="400" />
					</Sobject>
				
					<Spot height={200} width={200} color={'rgba(0,0,0,0.92)'} />
                   </Scene>

				
				</div>
			)
	}
}
