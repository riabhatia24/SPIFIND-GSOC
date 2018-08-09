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
import Logo from '../images/level1/Logo.png'
import ReactCountdownClock from 'react-countdown-clock'


export default class Level4 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			show: false,
			play: false,
			bgmusic: false
		}
		this.sound = "https://instaud.io/_/2vY6.mp3"
		this.sound2 = "https://instaud.io/_/2wX7.mp3"
		this.audio = new Audio(this.sound)
		this.audio2 = new Audio(this.sound2)
	}


	 componentDidMount() {
    this.setState({bgmusic: true});
    this.audio2.loop = true;
    this.audio2.play();
   }

   playIt(){
	      
			this.setState({bgmusic: !this.state.bgmusic})
			this.audio2.play();
			console.log('play')
		}

		pauseIt(){
	      this.setState({bgmusic: !this.state.bgmusic})
			this.audio2.pause();
			console.log('pause')
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
						<img src={Room} height="725" width="1500" />
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
						<Sobject name={'score'} xPos={1200} yPos={615}>
						<Score count={this.state.count}/>
					</Sobject>
					<Sobject name={'text'} xPos={80} yPos={645}>
						<Link to="/"><button onClick={(e) => e.stopPropagation()} className={'quit'}><b>Quit</b></button></Link>
					</Sobject>
					
                       <Sobject name={'score'} xPos={650} yPos={630}>  
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

                         <Sobject name={'text'} xPos={750} yPos={630}>
						<button className={'audio'} onClick={this.state.bgmusic ? this.pauseIt.bind(this) : this.playIt.bind(this)}>{this.state.bgmusic ?  'MUTE' : 'UNMUTE'}</button>
					</Sobject>
					<Sobject name={'logo'} xPos={785} yPos={680}>
						<img src={Logo} height="30" width="30" onClick={this.state.bgmusic ? this.pauseIt.bind(this) : this.playIt.bind(this)} />
					</Sobject>

                    

                    </Scene>

				
				</div>
			)
	}
}



