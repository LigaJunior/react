import axios from 'axios';
import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import './Sprint.css';

class Sprint extends Component {

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
          label: 'Data de término',
          field: 'endDate',
          sort: 'asc',
          width: 200
        }
      ], rows: this.state.sprintList
    }

    return (
      <div className='sprint'>
        <div className="sprint-page-title">
          <h3>Sprints</h3>
          <p>Nessa página estão listadas todas as sprints já cadastradas.</p>
        </div>
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
        var sprintList = new Array()
        const source = res.data;
        for (var i = 0; i < source.length; i++) {
          sprintList[i]={name:source[i].name, sprintNumber:source[i].sprintNumber, endDate:source[i].endDate}
        } 
        console.log(res.data.id)
        this.setState({ sprintList });
      })
  }
}

export default Sprint