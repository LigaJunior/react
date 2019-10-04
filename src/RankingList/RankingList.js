import React, { Component } from 'react'
import Axios from 'axios';
import urlConfig from '../url-config'
import './RankingList.css'
import $ from 'jquery'
import 'bootstrap'

const url = urlConfig.defaultURL;
class RankingList extends Component {

    constructor() {
        super();
        this.state = {
            playerConsumptionRanking: [],
            junkFoodConsumptionRanking: []
        }
    }

    render() {
        return (
            <div>
                <div className="mb-3">
                    <h4 id="ranking-title">Consumo geral</h4>
                    <ul className="list-group">
                        {this.state.playerConsumptionRanking.map((ranking, index) =>
                            index < 3 && [
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center"
                                    onClick={this.handlePlayerClick} style={{ cursor: "pointer" }} id={ranking.player.id}>
                                    {ranking.player.name}
                                    <span className="ml-2 badge badge-primary badge-pill">{ranking.amount}</span>
                                </li>
                            ]
                        )}
                    </ul>
                </div>
                <div>
                    <h4 id="ranking-title">Porcarias por sprint</h4>
                    <ul className="list-group">
                        {this.state.junkFoodConsumptionRanking.map((ranking, index) =>
                            index < 3 && [
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center"
                                    onClick={this.handleSprintClick} style={{ cursor: "pointer" }} 
                                    id={ranking.sprint.id}
                                    data-number={ranking.sprint.sprintNumber}
                                    data-name={ranking.sprint.name}
                                    data-active={ranking.sprint.active}
                                    data-start={ranking.sprint.startDate}
                                    data-end={ranking.sprint.endDate}>
                                    {ranking.sprint.name}
                                    <span className="ml-2 badge badge-primary badge-pill">{ranking.amount}</span>
                                </li>
                            ]
                        )}
                    </ul>
                </div>
            </div>
        )
    }

    handlePlayerClick = (e) => {
        let clickedId = e.target.id
        Axios.get(url + '/players/rank')
            .then(res => {
                const sourceData = res.data
                console.log(sourceData.filter((ranking) => ranking.player.id == clickedId))
            })
    }

    handleSprintClick = (e) => {
        let clickedId = e.target.id
        Axios.get(url + '/sprints/rank')
            .then(res => {
                const sourceData = res.data
                console.log(sourceData.filter((ranking) => ranking.sprint.id == clickedId))
            })
        $("#showSprintDetailsModal").modal("show")
        
        $("#showSprintDetailsFormInputNumber").val(e.target.getAttribute('data-number'))
        $("#showSprintDetailsFormInputName").val(e.target.getAttribute('data-name'))
        $("#showSprintDetailsFormInputActive").val(e.target.getAttribute('data-active') == "true"?"Ativa":"Terminada")
        $("#showSprintDetailsFormInputStartDate").val(e.target.getAttribute('data-start'))
        $("#showSprintDetailsFormInputEndDate").val(e.target.getAttribute('data-end'))
    }

    componentDidMount() {
        Axios.get(url + '/sprints/rank')
            .then(res => {
                console.log(res.data)
                var junkFoodConsumptionRanking = res.data
                this.setState({ junkFoodConsumptionRanking })
            })
        Axios.get(url + '/players/rank')
            .then(res => {
                console.log(res.data)
                var playerConsumptionRanking = res.data
                this.setState({ playerConsumptionRanking })
            })
    }
}

export default RankingList