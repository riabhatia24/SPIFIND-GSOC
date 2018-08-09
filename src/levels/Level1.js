import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Spot from '../components/Spotlight'
import Spider from '../components/Spider'
import Room from '../images/level1/Room.png'
import Bed from '../images/level1/Bed.png'
import Bag from '../images/level1/Bag.png'
import Book from '../images/level1/Books.png'
import Window from '../images/level1/Window.png'
import Curtain from '../images/level1/Curtain.png'
import Vase from '../images/level1/Vase.png'
import Painting from '../images/level1/Painting.jpg'
import Aqua from '../images/level1/aqua.gif'
import Horse from '../images/level1/Horse.png'
import Car from '../images/level1/Car.png'
import Clock from '../images/level1/Clock.gif'
import Score from '../score/Score.js'
import Gameover1 from '../score/Gameover.js'
import {Link} from 'react-router-dom'
import Logo from '../images/level1/Logo.png'
import ReactCountdownClock from 'react-countdown-clock'




export default class Level1 extends React.Component {
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
		 
		this.setState({count: this.state.count + 1, play: true })
		this.audio.play();
	}
	
    
   render() {
		return (
			    
			    <div>
               	
				<Scene>
				    
				     
					<Sobject name={'room'} xPos={0} yPos={0}>
						<img src={Room} height="725" width="1495" />
					</Sobject>
					<Sobject name={'bed'} xPos={20} yPos={280}>
						<img src={Bed} height="445" width="850"/>
					</Sobject>
					<Sobject name={'window'} xPos={10} yPos={20}>
						<img src={Window} height="260" width="380" />
					</Sobject>
					<Sobject name={'curtain'} xPos={40} yPos={20}>
						<img src={Curtain} height="200" width="320" />
					</Sobject>
					<Sobject name={'clock'} xPos={30} yPos={120}>
						<img src={Clock} height="150" width="230" />
					</Sobject>
					<Sobject name={'vase'} xPos={1000} yPos={100}>
						<img className={'vase'} src={Vase} height="300" />
					</Sobject>
					<Sobject name={'duck'} xPos={40} yPos={470}>
						<img src={Bag} height="200" />
					</Sobject>
					<Sobject name={'toy1'} xPos={850} yPos={520}>
						<img src={Car} className={'car'} height="200" width="350" />
					</Sobject>
					<Sobject name={'toy3'} xPos={1200} yPos={440}>
						<img src={Horse} className={'horse'} height="230" width="240"  />
					</Sobject>
                    <Sobject name={'book'} xPos={440} yPos={330}>
						<img src={Book} height="180" width="180" />
					</Sobject>
					<Sobject name={'painting'} xPos={716} yPos={80}>
						<img src={Painting} height="140" />
					</Sobject>
					<Sobject name={'Aqua'} xPos={1210} yPos={169}>
						<img src={Aqua} height="230" width="230" />
					</Sobject>
					<Spider clicked={this.clicked.bind(this)} />
		           
					
					 <Spot height={180} width={180} color={'rgba(0,0,0,0.91)'} />
					<Sobject name={'score'} xPos={1200} yPos={615}>
						<Score count={this.state.count}/>
					</Sobject>
					<Sobject name={'text'} xPos={80} yPos={645}>
						<Link to="/"><button className={'quit'} onClick={(e) => e.stopPropagation()}><b>Quit</b></button></Link>
					</Sobject>
					
                       <Sobject name={'score'} xPos={650} yPos={630}>  
                       {!this.state.show ? (
                         <ReactCountdownClock
            seconds={390}
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
						<img src={Logo} height="30" width="30" />
					</Sobject>


                    </Scene>

				
				</div>
				
			)
	}
}



