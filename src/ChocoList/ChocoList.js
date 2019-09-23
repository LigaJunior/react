import React, { Component } from 'react';
import axios from 'axios';
// import $ from 'jquery'
import Modal from '../Modal/Modal'
import Form from '../Form/Form'
import ChocoCard from '../ChocoCard/ChocoCard';
import './ChocoList.css'
import ListHeader from '../ListHeader/ListHeader';

export default class Choco extends Component {
  constructor() {
    super()
    this.state = {
      choco: [],
      players: []
    }
  }

  render() {
    return (
      <div>
        <ListHeader
          btnToggle="modal"
          btnTarget="createDevedor"
          color="white"
          theme="light"
          identifier="collapseChoco"
          buttonText="Adicionar devedor"
          listTitle="Caixas de chocolate"
          listDetails="Esta seção contem a relação de todas as caixas de chocolate devidas e pagas" />
        <div className="collapse show" id="collapseChoco">
          {this.state.choco.map((choco, index) =>
            <div key={index} className="list-choco-card">
              <ChocoCard
                id={choco.id}
                playerName={choco.name}
                reason={choco.reason}
                date={choco.registrationDate}
                paid={choco.paidOut} 
                payAction={()=>{
                  axios.patch('http://localhost:8080/choco/pay/'+choco.id,{})
                    .then(res => {
                      // const choco = res.data;
                      //this.setState({ choco });
                      console.log(choco)
                      alert('A caixa foi paga.')
                    })
                }}/>
            </div>
          )}
        </div>
        <Modal
          identifier="createDevedor"
          title="Adicionando devedor"
          body={
            <Form submitFunction={()=>{
              axios.post('http://localhost:8080/choco', {
                playerId: document.getElementById('formAddDebtorSelectPlayer').value,
                reason: document.getElementById('formAddDebtorInputMotivo').value
              })
                .then(res => {
                  // $('#createDevedor').modal('hide')
                  alert("Debito cadastrado.")
                })
            }} 
            jsxOptional={
              <div key={"choco-optional-1"}>
                <label style={{display:"block"}}>Player</label>
                <select id="formAddDebtorSelectPlayer" className="form-control">
                  {this.state.players.map((player, index) =>
                    <option key={index} value={player.id}>{player.name}</option>
                  )}
                </select>
              </div>
            } 
            inputs={[{ name: "Motivo", type: "text" }]}
            identifier="formAddDebtor"></Form>
          }/>
      </div>
    )
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/choco`)
      .then(res => {
        const choco = res.data;

        this.setState({ choco });
        console.log(choco)
      })
    axios.get(`http://localhost:8080/players`)
    .then(res => {
      const players = res.data;
      this.setState({ players });
      console.log(players)
    })
  }

}
