import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Spot from '../components/Spotlight'
import Spider from '../components/Spider'
import Room from '../images/level5/Room.jpg'
import Books from '../images/level5/Books.png'
import Juice from '../images/level5/Juice.png'
import Seat from '../images/level5/Seat.png'
import Table from '../images/level5/Table.png'
import Wall from '../images/level5/Wall.png'
import Pen from '../images/level5/Pen.png'
import Boardy from '../images/level5/Board.png'
import Laptop from '../images/level5/Laptop.png'
import Bag from '../images/level5/Bag.png'
import Score from '../score/Score.js'
import Gameover1 from '../score/Gameover.js'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
import ReactCountdownClock from 'react-countdown-clock'



class Level5 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			show: false
		}
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
		  
		this.setState({count: this.state.count + 1 })
	}
	

	render() {
		return (
			<div>
				<Scene>
				    
					<Sobject name={'room'} xPos={0} yPos={0}>
						<img src={Room} height="725" width="1536" />
					</Sobject>
					<Sobject name={'seat'} xPos={35} yPos={330}>
						<img src={Seat} height="390" width="390" />
					</Sobject>
					<Sobject name={'Board'} xPos={470} yPos={210}>
						<img src={Boardy} height="350" width="420" />
					</Sobject>
					<Sobject name={'wall'} xPos={30} yPos={30}>
						<img src={Wall} className={'wall'} height="250" width="250"/>
					</Sobject>
					<Sobject name={'table'} xPos={1150} yPos={450}>
						<img src={Table} height="280"width="210" />
					</Sobject>
					<Sobject name={'bag'} xPos={550} yPos={560}>
						<img src={Bag} className={'bag'} height="150" />
					</Sobject>
					<Sobject name={'laptop'} xPos={1210} yPos={210}>
						<img src={Laptop} height="190"width="290" />
					</Sobject>
					<Sobject name={'books'} xPos={1000} yPos={205}>
						<img src={Books} className={'books'} height="200" width="200"/>
					</Sobject>
					<Sobject name={'pen'} xPos={155} yPos={350}>
						<img src={Pen} className={'pen'} height="100" width="100" />
					</Sobject>
					<Sobject name={'juice'} xPos={1210} yPos={380}>
						<img src={Juice} className={'juice'} height="110" width="80" />
					</Sobject>
					<Spider clicked={this.clicked.bind(this)}/>
					<Spot height={180} width={180} color={'rgba(0,0,0,0.98)'} />
						<Sobject name={'score'} xPos={1340} yPos={640}>
						<Score count={this.state.count}/>
					</Sobject>
					<Sobject name={'text'} xPos={40} yPos={665}>
						<Link to="/"><button onClick={(e) => e.stopPropagation()} className={'quit'}>Quit</button></Link>
					</Sobject>
					
                       <Sobject name={'score'} xPos={700} yPos={630}>  
                       {!this.state.show ? (
                         <ReactCountdownClock
            seconds={150}
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



export default withRouter(Level5)
