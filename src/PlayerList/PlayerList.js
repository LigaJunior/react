import React, { Component } from 'react';
import axios from 'axios';
import Modal from '../Modal/Modal'
import Form from '../Form/Form'
import ListHeader from '../ListHeader/ListHeader'
import PlayerCard from '../PlayerCard/PlayerCard';
import './PlayerList.css'
import $ from 'jquery'
import 'bootstrap'
import { toast } from 'react-toastify';
export default class PlayerList extends Component {
  constructor() {
    super()
    this.state = {
      rankList: [],
      players: [],
      activeSprint: [],
      junkFoodList: [],
    }
  }
  notify = (message) => toast(message);
  render() {
    return (
      <div>
        <ListHeader
          btnToggle="modal"
          btnTarget="createPlayer"
          identifier="collapsePlayers"
          buttonText="Adicionar Player"
          listTitle="Players"
          listDetails="Esta seção contem todos os participantes da sprint corrente rankeados por level." />

        <div className="collapse show" id="collapsePlayers">
          {this.state.rankList.length > 0 ? this.state.rankList.map((rankPosition, index) =>
            <PlayerCard key={index} name={rankPosition.player.name} level={rankPosition.amount} playerId={rankPosition.player.id} />
          ) : (<div><label className="text-danger">Nenhum registro encontrado.</label></div>)}
        </div>
        <Modal
          body={
            <Form
              identifier="AddPlayerConsumptionForm"
              jsxOptional={
                <div key={"AddPlayerConsumptionFormOptionals"}>
                  <input hidden id="AddPlayerConsumptionFormSelectedId"></input>
                  <label style={{ display: "block" }}>Porcaria</label>
                  <select id="AddPlayerConsumptionFormSelectJunkFood" className="form-control">
                    {this.state.junkFoodList.map((junkfood, index) =>
                      <option key={index} value={junkfood.id}>{junkfood.name}</option>
                    )}
                  </select>
                  <label style={{ display: "block" }}>Quantidade</label>
                  <div className="input-group">
                    <input id="AddPlayerConsumptionFormInputAmount" type="number" min="1" placeholder="Digite aqui para o item quantidade" className="form-control" style={{ marginBottom: "15px" }} />
                  </div>
                </div>
              }
              submitFunction={() => {
                var amount = document.getElementById("AddPlayerConsumptionFormInputAmount").value
                var foodId = document.getElementById("AddPlayerConsumptionFormSelectJunkFood").value
                var sprintId = this.state.activeSprint[0].id;
                var playerId = document.getElementById("AddPlayerConsumptionFormSelectedId").value
                axios.post('http://localhost:8080/consumption-history/', { amount, junkfoodId: foodId, sprintId: sprintId, playerId: playerId })
                  .then(res => {
                    axios.get(`http://localhost:8080/sprints/active/player-rank`)
                      .then(res => {
                        $("#AddPlayerConsumptionModal").modal('hide')
                        const rankList = res.data;
                        this.setState({ rankList });
                        console.log(rankList)
                        this.notify("Consumo atribuído.")
                      })
                  })
              }}
            />
          }
          identifier="AddPlayerConsumptionModal"
          title="Adicionar consumo"
        />
        <Modal
          identifier="createPlayer"
          title="Adicionando Player"
          body={
            <Form submitFunction={() => {
              axios.patch('http://localhost:8080/sprints/' +
                document.getElementById("formAddPlayerSelectPlayer").value + "/" +
                this.state.activeSprint[0].id, {})
                .then(res => {
                  $('#createPlayer').modal('hide')
                  axios.get(`http://localhost:8080/sprints/active/player-rank`)
                    .then(res => {
                      const rankList = res.data;
                      this.setState({ rankList });
                      console.log(rankList)
                      this.notify("Player criado.")
                    })
                })
            }}
              identifier="formAddPlayer"
              jsxOptional={
                <div key={"player-optional-1"} style={{ paddingBottom: '15px' }}>
                  <label style={{ display: "block" }}>Player</label>
                  <select id="formAddPlayerSelectPlayer" className="form-control">
                    {this.state.players.map((player, index) =>
                      <option key={index} value={player.id}>{player.name}</option>
                    )}
                  </select>
                </div>
              } ></Form>
          } />
      </div>
    )
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/sprints/active/player-rank`)
      .then(res => {
        const rankList = res.data;
        this.setState({ rankList });
        console.log(rankList)
      })

    axios.get(`http://localhost:8080/players/unallocated`)
      .then(res => {
        const players = res.data;
        this.setState({ players });
        console.log(players)
      })
    axios.get(`http://localhost:8080/sprints/active`)
      .then(res => {
        const activeSprint = res.data;
        this.setState({ activeSprint });
        console.log(activeSprint)
      })
    axios.get(`http://localhost:8080/junk-foods`)
      .then(res => {
        const junkFoodList = res.data;
        this.setState({ junkFoodList });
        console.log(junkFoodList)
      })
  }

}
