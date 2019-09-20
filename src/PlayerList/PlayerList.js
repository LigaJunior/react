import React, {Component} from 'react';

import axios from 'axios';
import PlayerCard from '../PlayerCard/PlayerCard';
import './PlayerList.css'

export default class PlayerList extends Component {
  constructor() {
    super()
    this.state = {
      player: []
    }
  }

  render() {
    return (
      <div>
        <div className="list-header">
          <h3 className="list-title d-inline"
              data-toggle="collapse" 
              data-target="#collapsePlayers" 
              aria-expanded="false" 
              aria-controls="collapsePlayers">Players na sprint atual</h3>
          <button className="btn btn-outline-info btn-add">Adicionar player</button>
        </div>
        <div class="collapse" id="collapsePlayers">
          { this.state.player.map((player,index) =>
            <PlayerCard key={index} name = {player.name}/>
          )}
        </div>
      </div>
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

  test(){
    
  }

}
