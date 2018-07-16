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
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
import ReactCountdownClock from 'react-countdown-clock'




class Level1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			show: false,
			play: false
			
		}
		this.sound= "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"
		this.audio = new Audio(this.sound)
	}
     
    onCompleteCallBack = () => {
    this.setState({show: true })
  }; 

	 link(e){
    e.stopPropagation();
	this.interval=setTimeout(() =>this.props.history.push('/'), 3000)
    }
    remove(e){
    e.stopPropagation();
    clearTimeout(this.interval)
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
						<img src={Room} height="725" width="1536" />
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
					<Sobject name={'toy1'} xPos={870} yPos={520}>
						<img src={Car} className={'car'} height="200" width="350" />
					</Sobject>
					<Sobject name={'toy3'} xPos={1220} yPos={440}>
						<img src={Horse} className={'horse'} height="230" width="260" />
					</Sobject>
                    <Sobject name={'book'} xPos={440} yPos={330}>
						<img src={Book} height="180" width="180" />
					</Sobject>
					<Sobject name={'painting'} xPos={726} yPos={80}>
						<img src={Painting} height="150" />
					</Sobject>
					<Sobject name={'Aqua'} xPos={1230} yPos={169}>
						<img src={Aqua} height="230" width="230" />
					</Sobject>
					<Spider clicked={this.clicked.bind(this)} />
		           
					
					 <Spot height={180} width={180} color={'rgba(0,0,0,0.91)'} />
					<Sobject name={'score'} xPos={1340} yPos={640}>
						<Score count={this.state.count}/>
					</Sobject>
					<Sobject name={'text'} xPos={40} yPos={665}>
						<Link to="/"><button className={'quit'} onClick={(e) => e.stopPropagation()}>Quit</button></Link>
					</Sobject>
					
                       <Sobject name={'score'} xPos={700} yPos={630}>  
                       {!this.state.show ? (
                         <ReactCountdownClock
            seconds={390}
            color="white"
            alpha={1}
            size={90}
            showMilliseconds={false}
            onComplete={this.onCompleteCallBack}
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

export default withRouter(Level1)


