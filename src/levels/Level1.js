import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Room from '../images/level1/Room.png'
import Bed from '../images/level1/Bed.png'
import Duck from '../images/level1/Duck.png'
import Toy1 from '../images/level1/Toy1.png'
import Window from '../images/level1/Window2.jpg'
import Toy3 from '../images/level1/Toy2.gif'
import Curtain from '../images/level1/Curtain.png'
import Vase from '../images/level1/Vase.png'
import Painting from '../images/level1/Painting.jpg'
import Book from '../images/level1/Book.gif'
import Aqua from '../images/level1/aqua.gif'
import Spot from './Spotlight.js'
import ReactAudioPlayer from 'react-audio-player';
import Music from '../audio/Level.mp3'




export default class Level1 extends React.Component {
	constructor(props) {
		super(props)
	}
     

	render() {
		return (
			    <div>
                	
				<Scene>
				    
				    <ReactAudioPlayer src={Music} autoPlay controls loop volume={1}/>
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
						<img src={Vase} height="300"/>
					</Sobject>
					<Sobject name={'duck'} xPos={30} yPos={570}>
						<img src={Duck} height="150" />
					</Sobject>
					<Sobject name={'toy1'} xPos={950} yPos={420}>
						<img src={Toy1} height="300" />
					</Sobject>
					<Sobject name={'toy3'} xPos={1180} yPos={400}>
						<img src={Toy3} height="300" width="320" />
					</Sobject>
                    <Sobject name={'book'} xPos={380} yPos={410}>
						<img src={Book} height="120" />
					</Sobject>
					<Sobject name={'painting'} xPos={726} yPos={80}>
						<img src={Painting} height="150" />
					</Sobject>
					<Sobject name={'Aqua'} xPos={1230} yPos={169}>
						<img src={Aqua} height="230" width="230" />
					</Sobject>
					
				
					<Spot height={200} width={200} color={'rgba(0,0,0,0.91)'} />
					
                    </Scene>

				
				</div>
			)
	}
}
