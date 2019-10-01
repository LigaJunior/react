import axios from 'axios';
import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import './SprintTable.css';
import Modal from '../Modal/Modal';
import urlConfig from '../url-config'
import TitleHeader from '../TitleHeader/TitleHeader';
import Form from '../Form/Form';
import { toast } from 'react-toastify';
import $ from 'jquery'
import 'bootstrap'

const url = urlConfig.defaultURL;
function notify(message) {
  toast(message);
}
class SprintTable extends Component {

  constructor() {
    super()
    this.state = {
      sprintList: [],
    }
  }

  render() {
    const data = {
      columns: [
        {
          label: 'Nome',
          field: 'name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Número',
          field: 'sprintNumber',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Players',
          field: 'players',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Data de término',
          field: 'endDate',
          sort: 'asc',
          width: 200
        }
      ], rows: this.state.sprintList
    }

    return (
      <div className='sprints-page-body'>
        <TitleHeader
          title="Sprints"
          subtitle="Nessa página estão listadas todas as sprints já cadastradas."
          button
          btnToggle="modal"
          btnTarget="extendSprintDeadLineModal"
          btnText="Extender sprint atual"
        />
        <MDBDataTable
          responsive
          searchLabel="Buscar"
          entriesLabel="Linhas por página"
          infoLabel={["Mostrando de", "até", "de", "registros"]}
          paginationLabel={["Voltar", "Próxima"]}
          className="sprint-table"
          hover
          data={data} />
        <Modal identifier="extendSprintDeadLineModal"
        title="Prazo da sprint atual"
          body={
            <Form
              identifier="extendSprintDeadLineForm"
              jsxOptional={
                <div key={"extendSprintFormOptionals"}>
                    <label style={{ display: "block" }}>Nova Data de término</label>
                    <div className="input-group date">
                        <input id="extendSprintFormInputEndDate" type="date" className="form-control" style={{ marginBottom: "15px" }} />
                    </div>
                </div>
              }
              submitFunction={this.handleExtendSubmit}/>
          } />
      </div>
    );
  }

  handleExtendSubmit = (e) =>{
    var newEndDate = document.getElementById('extendSprintFormInputEndDate').value;
    console.log(newEndDate)
    axios.patch(url+'/sprints/extend', {newDeadLine:newEndDate}).then((res) => {
      console.log(res)
      $('#extendSprintDeadLineModal').modal("hide")
      notify('Novo deadline associado.')
    })
  }

  componentDidMount() {
    axios.get(url + '/sprints')
      .then(res => {
        var sprintList = []
        const source = res.data;
        for (var i = 0; i < source.length; i++) {
          sprintList[i] = {
            name: source[i].name,
            sprintNumber: source[i].sprintNumber,
            players: (
              <button id={source[i].id}
                onClick={this.sprintPlayerList}
                className="btn btn-link text-primary">{source[i].players.length}
              </button>
            ),
            endDate: source[i].endDate,
          }
        }
        this.setState({ sprintList });
      })
  }

  sprintPlayerList = (e) => {
    const sprintId = e.target.id
    axios.get(url + '/sprints/' + sprintId)
      .then(res => {
        var playerList = res.data[0].players
        console.log(playerList)
      })
  }
}

export default SprintTable