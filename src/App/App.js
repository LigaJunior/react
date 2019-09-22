import React, {Component} from 'react';
import './App.css';
import PlayerList from '../PlayerList/PlayerList';
import Choco from '../ChocoList/ChocoList';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <div style={{backgroundColor: 'pink'}}>
            {/* <h2 className="text-center p-3 pt-4 page-title m-0">Sprint atual</h2> */}
            
          </div>
          <div style={{backgroundColor: 'pink',padding:'20px'}}>
            <PlayerList />
          </div>
          <div style={{padding:'20px', minHeight:"200%", marginBottom:"250px"}}>
            <Choco />
          </div>
      </div>
    );
  }
}
export default App