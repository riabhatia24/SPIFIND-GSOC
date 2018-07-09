import React from 'react'
import Scene from '../components/Scene'
import Sobject from '../components/Object'
import Test from '../images/htp/Spotspi.gif'
import Info from '../images/htp/Step3.png'
import Wall from '../images/htp/wallpaper.png'
import Ted from '../images/htp/Teddy.gif'
import Black from '../images/htp/Black.png'
import Htp from '../images/htp/Heading2.png'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'



class Htp2 extends React.Component {
	constructor(props) {
		super(props)
	}
    link1(e){
     e.stopPropagation();
	this.interval=setTimeout(() =>this.props.history.push('/htp3'), 3000)
	console.log('mouseenter')
    }
    link2(e){
    e.stopPropagation();
	this.interval=setTimeout(() =>this.props.history.push('/htp1'), 3000)
	console.log('mouseenter')
    }
    remove(e){
    	e.stopPropagation();
		clearTimeout(this.interval)
		console.log('mouseleave')
	}
	
	
	render() {
		return (
			    <div>

				
				<Scene>
				    <Sobject name={'main'} xPos={0} yPos={0}>
						<img src={Wall} height="755" width="1536" />
					</Sobject>
					<Sobject name={'ted'} xPos={50} yPos={198}>
						<img src={Black} height="520" width="1448" />
					</Sobject>
					 <Sobject name={'ted'} xPos={960} yPos={270}>
						<img src={Ted} height="390" width="534" />
					</Sobject>
					 <Sobject name={'test'} xPos={50} yPos={198}>
						<img src={Test} height="520" width="894" />
					</Sobject>
					<Sobject name={'htp'} xPos={580} yPos={10}>
						<img src={Htp}/>
					</Sobject>
					<Sobject name={'info'} xPos={20} yPos={105}>
						<img src={Info}/>
					</Sobject>
					
					<Link to="/htp3">
					<Sobject name={'htp'} xPos={1305} yPos={35}>
						<button className={'button'} onMouseEnter={this.link1.bind(this)} onMouseLeave={this.remove.bind(this)}>NEXT &rarr;</button>
					</Sobject>
					</Link>

					<Link to="/htp1">
                    <Sobject name={'htp'} xPos={15} yPos={35}>
						<button className={'button'} onMouseEnter={this.link2.bind(this)} onMouseLeave={this.remove.bind(this)}>&larr; BACK</button>
					</Sobject>
					</Link>
                   
                     
                     
                     
                        
				</Scene>
				</div>
			)
	}
}
export default withRouter(Htp2)
