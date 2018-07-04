import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Test from '../images/htp/sp.gif'
import Ted from '../images/htp/Ted.gif'
import Wall from '../images/htp/wallpaper.png'
import Info from '../images/htp/Step.png'
import Htp from '../images/htp/Heading.png'
import {Link} from 'react-router-dom'
import Black from '../images/htp/Black.png'
import { withRouter } from 'react-router-dom'



class Htp1 extends React.Component {
	constructor(props) {
		super(props)
	}
    link1(){
	this.interval=setTimeout(() =>this.props.history.push('/htp2'), 8000)
    }
    link2(){
	this.interval=setTimeout(() =>this.props.history.push('/'), 8000)
    }
    remove(){
		clearTimeout(this.interval)
	}
	
	render() {
		return (
			    <div>

				<Scene>
				    <Sobject name={'main'} xPos={0} yPos={0}>
						<img src={Wall} height="755" width="1536" />
					</Sobject>
					<Sobject name={'ted'} xPos={50} yPos={198}>
						<img src={Black} height="530" width="1448" />
					</Sobject>
					 <Sobject name={'ted'} xPos={960} yPos={270}>
						<img src={Ted} height="390" width="534" />
					</Sobject>
					 <Sobject name={'test'} xPos={50} yPos={198}>
						<img src={Test} height="530" width="894" />
					</Sobject>
					<Sobject name={'htp'} xPos={580} yPos={10}>
						<img src={Htp}/>
					</Sobject>
					
                    
					<Sobject name={'info'} xPos={40} yPos={105}>
						<img src={Info}/>
					</Sobject>
					
					<Link to="/htp2">
					<Sobject name={'htp'} xPos={1305} yPos={35}>
						<button className={'button'} onMouseOver={this.link1.bind(this)} onMouseOut={this.remove.bind(this)}>NEXT &rarr;</button>
					</Sobject>
					</Link>

					<Link to="/">
                    <Sobject name={'htp'} xPos={15} yPos={35}>
						<button className={'button'} onMouseOver={this.link2.bind(this)} onMouseOut={this.remove.bind(this)}>&larr; BACK</button>
					</Sobject>
					</Link>
                   
                     
                     
                     
                        
				</Scene>
				</div>
			)
	}
}

export default withRouter(Htp1)