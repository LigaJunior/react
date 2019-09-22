import React, { Component } from 'react';
import axios from 'axios';

// import $ from 'jquery'
import Modal from '../Modal/Modal'
import Form from '../Form/Form'
import ListHeader from '../ListHeader/ListHeader'
import PlayerCard from '../PlayerCard/PlayerCard';
import './PlayerList.css'
export default class PlayerList extends Component {
  constructor() {
    super()
    this.state = {
      rankList: [],
      players: [],
      activeSprint: []
    }
  }

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
          {this.state.rankList.map((rankPosition, index) =>
            <PlayerCard key={index} name={rankPosition.player.name} level={rankPosition.amount} />
          )}
        </div>
        <Modal
          identifier="createPlayer"
          title="Adicionando Player"
          body={
            <Form submitFunction={() => {
              axios.patch('http://localhost:8080/sprints/' +
                document.getElementById("formAddPlayerSelectPlayer").value + "/" +
                this.state.activeSprint[0].id, {})
                .then(res => {
                  // $('#createPlayer').modal('show')
                  alert("Player associado.")
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
  }

}
