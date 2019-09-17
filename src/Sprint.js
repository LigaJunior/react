import React from 'react';

import axios from 'axios';

export default class Sprint extends React.Component {
  state = {
    sprint: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/players`)
      .then(res => {
        const sprint = res.data;
        this.setState({  
            sprint: res.data
        });

      })
  }
  
  
    

  render() {

    
    let sprint = this.state.sprint.map((sprint) => {
        return(

            <li>  {sprint.id}  </li>
            
        )
    })
    return(
        <li> {sprint}</li>
    )
    
  }
}
