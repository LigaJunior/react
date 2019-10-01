import React, { Component } from 'react';
import './App.css';
import PlayerList from '../PlayerList/PlayerList';
import Choco from '../ChocoList/ChocoList';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RankingList from '../RankingList/RankingList';

toast.configure()
class App extends Component {
  render() {
    return (
      <div className='App'>
        <div id="main-panel">
          <div id="ranking-panel">
            <RankingList/>
          </div>
          <div style={{ backgroundColor: 'pink', padding: '20px 20px 20px 285px' }}>
            <PlayerList />
          </div>
          <div style={{ padding: '20px 20px 20px 285px', minHeight: "200%", marginBottom: "250px" }}>
            <Choco />
          </div>
        </div>
      </div>
    );
  }
}
export default App