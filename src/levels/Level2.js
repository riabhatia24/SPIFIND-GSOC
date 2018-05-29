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




export default class Level2 extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
				<Scene>
					<Sobject name={'room'} xPos={0} yPos={0}>
						<img src={Room} height="755" width="1536" />
					</Sobject>
					<Sobject name={'sofa'} xPos={20} yPos={240}>
						<img src={Sofa} height="445" width="890"/>
					</Sobject>
					<Sobject name={'wall'} xPos={30} yPos={30}>
						<img src={Wall} height="200" width="200"/>
					</Sobject>
                    <Sobject name={'television'} xPos={905} yPos={200}>
						<img src={Television} width="630" height="500" />
					</Sobject>
					<Sobject name={'pokemon'} xPos={1005} yPos={220}>
						<img src={Pokemon} height="190" width="430"  />
					</Sobject>
					<Sobject name={'cat'} xPos={890} yPos={450}>
						<img src={Cat} width="300" height="300"/>
					</Sobject>
					<Sobject name={'table'} xPos={370} yPos={370}>
						<img src={Table} height="380px" width="200"/>
					</Sobject>
					<Sobject name={'telephone'} xPos={370} yPos={320}>
						<img src={Telephone} height="100px" />
					</Sobject>



				</Scene>
			)
	}
}
