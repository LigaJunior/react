import axios from 'axios';
import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import './PlayerTable.css';
import TitleHeader from '../TitleHeader/TitleHeader';

class PlayerTable extends Component {

  constructor() {
    super()
    this.state = {
      playerList: []
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
          label: 'Data de cadastro',
          field: 'registrationDate',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Ações',
          field: 'actions',
          sort: 'asc',
          width: 200
        }
      ], rows: this.state.playerList
    }

    return (
      <div className='players-page-body'>
        <TitleHeader title="Players" subtitle="Nessa página estão listadas todos os players já cadastrados."/>
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
            playerList[i]={name:source[i].name,
                registrationDate:source[i].registrationDate,
                actions:(
                    <div className="btn-group">
                        <button className="btn btn-primary">Editar</button>
                        <button className="btn btn-secondary" id={source[i].id}
                        onClick={(e)=>{
                          console.log('http://localhost:8080/players/'+e.target.id)
                          axios.delete('http://localhost:8080/players/'+e.target.id)
                        }}>Excluir</button>
                    </div>
                )
            }
        }
        this.setState({ playerList });
      })
  }
}

export default PlayerTable