import React from 'react';
import axios from 'axios';
import {
  Card, CardFooter, CardHeader
} from 'reactstrap';

export default class Sprint extends React.Component {
  state = {
    sprint: [],
    player: []
  }

  
  componentDidMount() {
    axios.get(`http://localhost:8080/sprints/player-rank`)
      .then(res => {
        const sprint = res.data;
        this.setState({ sprint })
      })
      axios.get(`http://localhost:8080/players`)
      .then(res => {
        const player = res.data;
        this.setState({ player })
      })
  }

  

  render() {
    
      let resultadoPlayer = []
      this.state.player.map(player => resultadoPlayer.push({'name': player.name, 'id': player.id}))  
      let resultadoSprint = []
      this.state.sprint.map(sprint => resultadoSprint.push({'amount': sprint.amount, 'id': sprint.player}))
      let vem = []
        return(
          <div>
            <Card>
            <CardHeader color="success" stats icon>
            { this.state.sprint.map(sprint => <p>{sprint.amount} - {sprint.player}</p>)}           
            </CardHeader>
            <CardFooter stats>
          
            </CardFooter>
            
            
          </Card>
            <ul>
          
        </ul>
        
        </div>
          
            
        )
    }
    
    
  }

