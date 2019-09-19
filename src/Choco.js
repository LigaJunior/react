import React, {Component} from 'react';

import axios from 'axios';

export default class Choco extends Component {
  constructor() {
    super()
  this.state = {
    choco: []
  }

}

  render() {
    return (
      <ul>      
      
        { this.state.choco.map(play => 
        
          <li key={play.toString()}>ID: {play.id} NOME: {play.name} DATA: {play.registrationDate} Rasão: DATA: {play.reason}</li>)}
          
        
      </ul>
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
