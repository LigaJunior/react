import axios from 'axios';
import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import './SprintTable.css';
import TitleHeader from '../TitleHeader/TitleHeader';

class SprintTable extends Component {

  constructor() {
    super()
    this.state = {
      sprintList: []
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
        <TitleHeader title="Sprints" subtitle="Nessa página estão listadas todas as sprints já cadastradas."/>
        <MDBDataTable
          responsive
          searchLabel="Buscar"
          entriesLabel="Linhas por página"
          infoLabel={["Mostrando de", "até", "de", "registros"]}
          paginationLabel={["Voltar", "Próxima"]}
          className="sprint-table"
          hover
          data={data} />
      </div>
    );
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/sprints`)
      .then(res => {
        var sprintList = []
        const source = res.data;
        for (var i = 0; i < source.length; i++) {
          sprintList[i]={
            name:source[i].name, 
            sprintNumber:source[i].sprintNumber, 
            players:(<button id={source[i].id}
            onClick={(e)=>{
              const sprintId = e.target.id
              console.log(sprintId)
              axios.get('http://localhost:8080/sprints/'+sprintId)
              .then(res =>{
                console.log(res)
              })
            }}
            className="btn btn-link text-primary">{source[i].players.length}</button>),
            endDate:source[i].endDate,
          }
        } 
        this.setState({ sprintList });
      })
  }
}

export default SprintTable