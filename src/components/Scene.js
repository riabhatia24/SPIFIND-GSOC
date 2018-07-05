import React from 'react';




export default class Scene extends React.Component {
  render() {
    return <div className={'scene-container'}>{this.props.children}</div>;
  }
}
