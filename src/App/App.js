import React, {Component} from 'react';
import './App.css';
import PlayerList from '../PlayerList/PlayerList';
import Choco from '../ChocoList/ChocoList';

class App extends Component {
  render(){
    return(
      <div className ='App'>
          <div>
            <PlayerList/>
            <div style={{
              marginTop: '50px'
            }}>
              <Choco/>
            </div>
          </div>
      </div>
    );
  }
}
export default App