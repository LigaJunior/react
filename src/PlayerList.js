import React, {Component} from 'react';

import axios from 'axios';

export default class PlayerList extends Component {
  constructor() {
    super()
  this.state = {
    players: []
  }

}

  render() {
    return (
      <ul>      
      
        { this.state.players.map(play => 
          <li>{play.name}</li>)}
        
        
      </ul>
    )
  }

  componentWillMount() {
    axios.get(`http://localhost:8080/players`)
      .then(res => {
        const player = res.data;
        if(player){
        this.setState({ players: [player] });
        console.log(res)
        console.log(player)
        }
      })
  }

}
