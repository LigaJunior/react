import axios from 'axios';
import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import './PlayerTable.css';
import TitleHeader from '../TitleHeader/TitleHeader';
import { toast } from 'react-toastify';

class PlayerTable extends Component {

  constructor() {
    super()
    this.state = {
      playerList: []
    }
  }
  notify = (message) => toast(message);
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
          label: 'Data de cadastro',
          field: 'registrationDate',
          sort: 'asc',
          width: 270
        },
        {
          label: '',
          field: 'actions',
          sort: 'asc',
          width: 200
        }
      ], rows: this.state.playerList
    }

    return (
      <div className='players-page-body'>
        <TitleHeader title="Players" subtitle="Nessa página estão listadas todos os players já cadastrados." />
        <MDBDataTable
          responsive
          searchLabel="Buscar"
          entriesLabel="Linhas por página"
          infoLabel={["Mostrando de", "até", "de", "registros"]}
          paginationLabel={["Voltar", "Próxima"]}
          hover
          data={data} />
      </div>
    );
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/players`)
      .then(res => {
        var playerList = []
        const source = res.data;
        for (var i = 0; i < source.length; i++) {
          playerList[i] = {
            name: source[i].name,
            registrationDate: source[i].registrationDate,
            actions: (
              <div className="btn-group">
                {/* <button className="btn btn-primary">Editar</button> */}
                <button className="btn btn-link text-primary"
                  id={source[i].id} onClick={this.removePlayer}> Excluir
                </button>
              </div>
            )
          }
        }
        this.setState({ playerList });
      })
  }

  removePlayer = (e) => {
    console.log('http://localhost:8080/players/' + e.target.id)
    axios.patch('http://localhost:8080/players/' + e.target.id,{})
      .then(res => {
        var playerList = []
        const source = res.data;
        for (var i = 0; i < source.length; i++) {
          playerList[i] = {
            name: source[i].name,
            registrationDate: source[i].registrationDate,
            actions: (
              <div className="btn-group">
                {/* <button className="btn btn-primary">Editar</button> */}
                <button className="btn btn-link text-primary"
                  id={source[i].id} onClick={this.removePlayer}> Excluir
                </button>
              </div>
            )
          }
        }
        this.setState({ playerList });
        this.notify("Player desligado.")
      })
  }
}

export default PlayerTable