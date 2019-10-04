import React, { Component } from 'react';
import './App.css';
import PlayerList from '../PlayerList/PlayerList';
import Choco from '../ChocoList/ChocoList';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RankingList from '../RankingList/RankingList';
import Modal from '../Modal/Modal'
import Form from '../Form/Form';

toast.configure()
class App extends Component {
  render() {
    return (
      <div className='App'>
        <div id="main-panel">
          <div id="ranking-panel">
            <RankingList />
          </div>
          <div style={{ backgroundColor: 'pink', padding: '20px 20px 20px 285px' }}>
            <PlayerList />
          </div>
          <div style={{ padding: '20px 20px 20px 285px', minHeight: "200%", marginBottom: "250px" }}>
            <Choco />
          </div>
        </div>
        <Modal identifier="showSprintDetailsModal" title="Detalhes da sprint"
          body={
            <Form identifier="showSprintDetailsForm"
              btnPrimary={{ active: false }}
              btnSecondary={{ text: "Fechar", active: true }}
              jsxOptional={
                <div key={"showSprintDetailsFormOptionals"}>
                  <div key={"showSprintDetailsFormOptionals"}>
                    <label style={{ display: "block" }}>Número da sprint</label>
                    <div className="input-group">
                      <input disabled id="showSprintDetailsFormInputNumber" type="text" placeholder="Indefinido(a)." className="form-control" style={{ marginBottom: "15px" }} />
                    </div>
                    <label style={{ display: "block" }}>Nome da sprint</label>
                    <div className="input-group">
                      <input disabled id="showSprintDetailsFormInputName" type="text" placeholder="Indefinido(a)." className="form-control" style={{ marginBottom: "15px" }} />
                    </div>
                    <label style={{ display: "block" }}>Status:</label>
                    <div className="input-group date">
                      <input disabled id="showSprintDetailsFormInputActive" type="text"
                        placeholder="Indefinido(a)." className="form-control" style={{ marginBottom: "15px" }} />
                    </div>
                    <label style={{ display: "block" }}>Data de inicio da sprint</label>
                    <div className="input-group">
                      <input disabled id="showSprintDetailsFormInputStartDate" type="text" placeholder="Indefinido(a)." className="form-control" style={{ marginBottom: "15px" }} />
                    </div>
                    <label style={{ display: "block" }}>Data de termino da sprint</label>
                    <div className="input-group date">
                      <input disabled id="showSprintDetailsFormInputEndDate" type="text"
                        placeholder="Indefinido(a)." className="form-control" style={{ marginBottom: "15px" }} />
                    </div>
                  </div>
                </div>
              } />
          }
        />
      </div>
    );
  }
}
export default App