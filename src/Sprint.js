import React from 'react';

import axios from 'axios';

export default class Sprint extends React.Component {
  state = {
    contacts: []
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
