import React, { Component } from 'react';
import './App.css';
import PlayerList from '../PlayerList/PlayerList';
import Choco from '../ChocoList/ChocoList';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
class App extends Component {
  render() {
    return (
      <div className='App'>
        <div style={{ backgroundColor: 'pink', padding: '20px' }}>
          <PlayerList />
        </div>
        <div style={{ padding: '20px', minHeight: "200%", marginBottom: "250px" }}>
          <Choco />
        </div>
      </div>
    );
  }
}
export default App