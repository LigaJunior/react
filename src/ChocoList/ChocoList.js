import React, { Component } from 'react';
import axios from 'axios';
import Modal from '../Modal/Modal'
import Form from '../Form/Form'
import ChocoCard from '../ChocoCard/ChocoCard';
import './ChocoList.css'
import ListHeader from '../ListHeader/ListHeader';
import $ from 'jquery'
import 'bootstrap'
import { toast } from 'react-toastify';

export default class Choco extends Component {
  constructor() {
    super()
    this.state = {
      chocoList: [],
      players: []
    }
  }
  notify = (message) => toast(message);
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
          {this.state.chocoList.length > 0 ? this.state.chocoList.map((choco, index) =>
            <div key={index} className="list-choco-card">
              <ChocoCard
                id={choco.id}
                playerName={choco.name}
                reason={choco.reason}
                date={choco.registrationDate}
                paid={choco.paidOut}
                payAction={() => {
                  axios.patch('http://localhost:8080/choco/pay/' + choco.id, {})
                    .then(() => {
                      axios.get(`http://localhost:8080/choco`)
                        .then(res => {
                          const chocoList = res.data;
                          this.setState({ chocoList });
                          console.log(chocoList)
                          this.notify("Débito pago.")
                        })
                    })
                }} />
            </div>
          ) : (<div><label className="text-danger">Nenhum registro encontrado.</label></div>)}
        </div>
        <Modal
          identifier="createDevedor"
          title="Adicionando devedor"
          body={
            <Form submitFunction={() => {
              axios.post('http://localhost:8080/choco', {
                playerId: document.getElementById('formAddDebtorSelectPlayer').value,
                reason: document.getElementById('formAddDebtorInputMotivo').value
              }).then(res => {
                $('#createDevedor').modal('hide')
                axios.get(`http://localhost:8080/choco`)
                  .then(res => {
                    const chocoList = res.data;
                    this.setState({ chocoList });
                    console.log(chocoList)
                    this.notify("Débito adicionado.")
                  })
              })
            }}
              jsxOptional={
                <div key={"choco-optional-1"}>
                  <label style={{ display: "block" }}>Player</label>
                  <select id="formAddDebtorSelectPlayer" className="form-control">
                    {this.state.players.map((player, index) =>
                      <option key={index} value={player.id}>{player.name}</option>
                    )}
                  </select>
                </div>
              }
              inputs={[{ name: "Motivo", type: "text" }]}
              identifier="formAddDebtor"></Form>
          } />
      </div>
    )
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/choco`)
      .then(res => {
        const chocoList = res.data;

        this.setState({ chocoList });
        console.log(chocoList)
      })
    axios.get(`http://localhost:8080/players`)
      .then(res => {
        const players = res.data;
        this.setState({ players });
        console.log(players)
      })
  }

}
