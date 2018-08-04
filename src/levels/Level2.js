import React from 'react';
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Spot from '../components/Spotlight'
import Spider from '../components/Spider'
import Cat from '../images/level2/Cat.gif'
import Room from '../images/level2/Main.jpg'
import Sofa from '../images/level2/Sofa.png'
import Table from '../images/level2/Table.png'
import Telephone from '../images/level2/Phone.gif'
import Television from '../images/level2/Television.png'
import Wall from '../images/level2/Wall.png'
import Pokemon from '../images/level2/Pokemon.gif'
import Score from '../score/Score.js'
import Gameover1 from '../score/Gameover.js'
import {Link} from 'react-router-dom'
import ReactCountdownClock from 'react-countdown-clock'


export default class Level2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			show: false,
			play: false
		}
		this.sound = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"
		this.audio = new Audio(this.sound)
	}

      onCompleteCallBack() {
    this.setState({show: true })
  }

	clicked(){
		  
		this.setState({count: this.state.count + 1, play: true })
		this.audio.play();
	}
	render() {
		return (
			<div>
				<Scene>
				     
					<Sobject name={'room'} xPos={0} yPos={0}>
						<img src={Room} height="725" width="1485" />
					</Sobject>
					<Sobject name={'sofa'} xPos={20} yPos={240}>
						<img src={Sofa} height="445" width="890"/>
					</Sobject>
					<Sobject name={'wall'} xPos={30} yPos={30}>
						<img className={'wall'} src={Wall} height="200" width="200"/>
					</Sobject>
                    <Sobject name={'television'} xPos={855} yPos={200}>
						<img src={Television} width="530" height="480" />
					</Sobject>
					<Sobject name={'pokemon'} xPos={940} yPos={217}>
						<img src={Pokemon} height="190" width="360"  />
					</Sobject>
					<Sobject name={'cat'} xPos={890} yPos={480}>
						<img src={Cat} width="250" height="250"/>
					</Sobject>
					<Sobject name={'table'} xPos={370} yPos={350}>
						<img src={Table} height="380px" width="200"/>
					</Sobject>
					<Sobject name={'telephone'} xPos={290} yPos={220}>
						<img src={Telephone} height="200px" />
					</Sobject>
					<Spider clicked={this.clicked.bind(this)}/>
					<Spot height={180} width={180} color={'rgba(0,0,0,0.94)'} />
						<Sobject name={'score'} xPos={1200} yPos={615}>
						<Score count={this.state.count}/>
					</Sobject>
					<Sobject name={'text'} xPos={80} yPos={645}>
						<Link to="/"><button onClick={(e) => e.stopPropagation()} className={'quit'}><b>Quit</b></button></Link>
					</Sobject>
					
                       <Sobject name={'score'} xPos={700} yPos={630}>  
                       {!this.state.show ? (
                         <ReactCountdownClock
            seconds={330}
            color="white"
            alpha={1}
            size={90}
            showMilliseconds={false}
            onComplete={this.onCompleteCallBack.bind(this)}
            weight={10}
          />
        ) : (
         <Gameover1 score={this.state.count} />
        )}
                     </Sobject>
                    

                    </Scene>

				
				</div>
			)
	}
}


