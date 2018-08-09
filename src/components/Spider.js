import React from "react";
import Sprite from '../images/Spider/Spider4.gif';
import PropTypes from 'prop-types';


export default class Spider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: Math.floor(Math.random() * 1330 + Math.random() * 10),
      y: Math.floor(Math.random() * 520 + Math.random() * 10),
      m: 1,
      show: false

    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({show: true}) , 5000)
    
   }

  work(){

    this.setState({
     m: 0,
     x: Math.floor((Math.random() * 1330 + Math.random() * 10)),
     y: Math.floor(Math.random() * 520 + Math.random() * 10),
    }, () => {setTimeout(() => this.setState({ 
        x: Math.floor((Math.random() * 1330 + Math.random() * 10)),
      y: Math.floor(Math.random() * 520 + Math.random() * 10),
      m: 1
    }), 3500)
             })
  
     
  }

  render() {
    let { x, y, m } = this.state;
    console.log(x, y, m)

    return (
      <div onClick={() => console.log('spider')}>
      <div
        style={{
          
          position: "fixed",
          opacity: `${m}`,
        left: `${x}px`,
        top: `${y}px`,
        rotate: `${y}px`

        
        }}
        onClick={this.work.bind(this)}
       

      >
        
      {this.state.show ? <img src={Sprite} height="170" width="170" onClick={this.props.clicked} /> : null}
        </div>
        </div>
    );
  }

}

Spider.propTypes = {

  clicked: PropTypes.func
}
