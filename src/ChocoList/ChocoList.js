import React, {Component} from 'react';

import axios from 'axios';
import ChocoCard from '../ChocoCard/ChocoCard';
import './ChocoList.css'

export default class Choco extends Component {
constructor() {
  super()
  this.state = {
    choco: []
  }
}

  render() {
    return (
      <div>
        <div className="list-header">
          <h3 className="list-title d-inline"
              data-toggle="collapse" 
              data-target="#collapseChoco" 
              aria-expanded="false" 
              aria-controls="collapseChoco">Caixas de chocolate</h3>
          <button className="btn btn-outline-info btn-add">Adicionar devedor</button>
        </div>
        <div class="collapse" id="collapseChoco">
          { this.state.choco.map((choco,index) =>
            <div className="list-choco-card">
              <ChocoCard
                key={index}
                playerName = {choco.name}
                reason = {choco.reason}
                date = {choco.registrationDate}/>
            </div>
          )}
        </div>
      </div>
    )
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/choco`)
      .then(res => {
        const choco = res.data;
        
        this.setState({ choco});
        console.log(choco)
      })
  }

}
