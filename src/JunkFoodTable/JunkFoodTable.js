import axios from 'axios';
import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import './JunkFoodTable.css';
import TitleHeader from '../TitleHeader/TitleHeader';

class JunkFoodTable extends Component {

  constructor() {
    super()
    this.state = {
      junkFoodList: []
    }
  }

  render() {
    const data = {
      columns: [
        {
          label: 'Nome',
          field: 'name',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Data de cadastro',
          field: 'registrationDate',
          sort: 'asc',
          width: 200
        },
        // {
        //   label: 'Ações',
        //   field: 'actions',
        //   sort: 'asc',
        //   width: 150
        // }
      ], rows: this.state.junkFoodList
    }

    return (
      <div className='junkfood-page-body'>
        <TitleHeader title="Porcarias" subtitle="Nessa página estão listadas todas as porcarias já cadastradas."/>
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
    axios.get(`http://localhost:8080/junk-foods`)
      .then(res => {
        var junkFoodList = []
        const source = res.data;
        for (var i = 0; i < source.length; i++) {
            junkFoodList[i]={
              name:source[i].name,
              registrationDate:source[i].registrationDate,
              // actions:(
              //   <div className="btn-group">
              //     <button className="btn btn-primary">Editar</button>
              //     <button className="btn btn-secondary">Excluir</button>
              //   </div>
              // )
            }
        }
        console.log(res.data)
        this.setState({ junkFoodList });
      })
  }
}

export default JunkFoodTable