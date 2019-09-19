import React, {Component} from 'react';

import axios from 'axios';

export default class PlayerList extends Component {
  constructor() {
    super()
  this.state = {
    player: []
  }

}

  render() {
    return (
      <ul>      
      
        { this.state.player.map(play => 
        
          <li key={play.toString()}>ID:{play.id}NOME:{play.name} </li>)}
        
        
      </ul>
    )
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/players`)
      .then(res => {
        const player = res.data;
        
        this.setState({ player});
        console.log(player)
      })
  }

}
