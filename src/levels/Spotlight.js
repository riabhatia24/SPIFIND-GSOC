import React from 'react';

export default class Spot extends React.Component {

  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0};
  }


  _onMouseMove(e) {
    this.setState({ x: e.screenX , y: e.screenY });

    
  }

  render() {
    const { x, y } = this.state;
    return (
       <div className={'spot'} onMouseMove={this._onMouseMove.bind(this)} style={{background: `radial-gradient(${this.props.height}px ${this.props.width}px at ${x}px ${y}px , transparent 90%, ${this.props.color})`, top: '0', bottom: '0', left: '0', right: '0', position: 'absolute'}}> 
         </div>
    );
  }
}
