import React, { Component } from 'react';
class Card extends Component{

constructor(props){
    super(props);
}
  render(){
      return (<h1>test{this.props.name}</h1>);
  }
}

export default Card;