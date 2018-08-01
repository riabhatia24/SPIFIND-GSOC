import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Spot from '../components/Spotlight'
import Spider from '../components/Spider'
import Room from '../images/level4/Room.png'
import Clock from '../images/level4/Clock.gif'
import Dustbin from '../images/level4/Dustbin.png'
import Oven from '../images/level4/Oven.png'
import Sticker from '../images/level4/Sticker.png'
import Table from '../images/level4/Table.png'
import Refrigerator from '../images/level4/Refrigerator.png'
import Cup from '../images/level4/Cup.gif'
import Food from '../images/level4/Food.png'
import Spoon from '../images/level4/Spoon.png'
import Score from '../score/Score.js'
import Gameover1 from '../score/Gameover.js'
import {Link} from 'react-router-dom'
import ReactCountdownClock from 'react-countdown-clock'


export default class Level4 extends React.Component {
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
		  
		this.setState({count: this.state.count + 1,  play: true  })
		this.audio.play();
	}

	render() {
		return (
			<div>
				<Scene>
				  
					<Sobject name={'room'} xPos={0} yPos={0}>
						<img src={Room} height="725" width="1495" />
					</Sobject>
					<Sobject name={'Refrigerator'} xPos={30} yPos={140}>
						<img src={Refrigerator} height="580" width="300" />
					</Sobject>
					<Sobject name={'tabel'} xPos={350} yPos={205}>
						<img src={Table} height="530" width="530"/>
					</Sobject>
					<Sobject name={'teapot'} xPos={950} yPos={235}>
						<img src={Cup} height="150" width="150"/>
					</Sobject>
					<Sobject name={'oven'} xPos={1190} yPos={220}>
						<img src={Oven} height="190"width="290" />
					</Sobject>
					<Sobject name={'dustbin'} xPos={1280} yPos={520}>
						<img src={Dustbin} className={'dustbin'} height="190"width="200" />
					</Sobject>
					<Sobject name={'clock'} xPos={750} yPos={30}>
						<img src={Clock} height="180" width="180" />
					</Sobject>
					<Sobject name={'sticker'} xPos={180} yPos={210}>
						<img src={Sticker} height="100" width="100" />
					</Sobject>
					<Sobject name={'teapot'} xPos={1090} yPos={285}>
						<img src={Food} height="90" width="130"/>
					</Sobject>
					<Sobject name={'spoon'} xPos={1125} yPos={248}>
						<img src={Spoon} className={'spoon'} height="70" width="100"/>
					</Sobject>
					<Spider clicked={this.clicked.bind(this)}/>
					<Spot height={180} width={180} color={'rgba(0,0,0,0.97)'} />
						<Sobject name={'score'} xPos={1300} yPos={640}>
						<Score count={this.state.count}/>
					</Sobject>
					<Sobject name={'text'} xPos={40} yPos={665}>
						<Link to="/"><button onClick={(e) => e.stopPropagation()} className={'quit'}>Quit</button></Link>
					</Sobject>
					
                       <Sobject name={'score'} xPos={700} yPos={630}>  
                       {!this.state.show ? (
                         <ReactCountdownClock
            seconds={210}
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



