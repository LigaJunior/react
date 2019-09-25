import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App/App';
import Sprints from './SprintTable/SprintTable';
import Players from './PlayerTable/PlayerTable';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar';
import Modal from './Modal/Modal'
import Form from './Form/Form';
import Axios from 'axios';
import JunkFoodTable from './JunkFoodTable/JunkFoodTable';
ReactDOM.render(
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/sprints" exact={true} component={Sprints} />
            <Route path="/players" exact={true} component={Players} />
            <Route path="/junk-foods" exact={true} component={JunkFoodTable} />
        </Switch>
        <Modal
            body={
                <Form
                    identifier="CreateNewSprintForm"
                    jsxOptional={
                        <div key={"CreateNewSprintFormOptionals"}>
                            <label style={{ display: "block" }}>Data de início da sprint</label>
                            <div className="input-group date">
                                <input id="CreateNewSprintFormInputStartDate" type="date" className="form-control" style={{ marginBottom: "15px" }} />
                            </div>
                            <label style={{ display: "block" }}>Data de termino da sprint</label>
                            <div className="input-group date">
                                <input id="CreateNewSprintFormInputEndDate" type="date" className="form-control" style={{ marginBottom: "15px" }} />
                            </div>
                            <label style={{ display: "block" }}>Número da sprint</label>
                            <div className="input-group">
                                <input id="CreateNewSprintFormInputNumber" type="number" min="0" placeholder="Digite aqui para o item número da sprint" className="form-control" style={{ marginBottom: "15px" }} />
                            </div>
                        </div>
                    }
                    inputs={[{ name: "Nome", type: "text" }]}
                    submitFunction={() => {
                        var startDate = document.getElementById('CreateNewSprintFormInputStartDate').value;
                        var endDate = document.getElementById('CreateNewSprintFormInputEndDate').value;
                        var sprintNumber = document.getElementById('CreateNewSprintFormInputNumber').value;
                        var name = document.getElementById('CreateNewSprintFormInputNome').value;
                        var data = {
                            startDate, endDate, sprintNumber, name
                        }
                        console.log(data);
                        Axios.post('http://localhost:8080/sprints', data).then((res) => {
                            console.log(res)
                            alert('Sprint iniciada.')
                        })
                    }} />
            }
            identifier="CreateNewSprintModal"
            title="Cadastrar nova sprint" />
        <Modal
            identifier="ShowAllSprintsModal"
            title="Lista de sprints" />
        <Modal
            identifier="ShowAllPlayersModal"
            title="Lista de players" />
        <Modal
            body={
                <Form
                    identifier="CreateNewPlayerForm"
                    inputs={[{ name: "Nome", type: "text" }]}
                    submitFunction={() => {
                        var name = document.getElementById('CreateNewPlayerFormInputNome').value;
                        var data = {
                            name
                        }
                        console.log(data);
                        Axios.post('http://localhost:8080/players', data).then((res) => {
                            console.log(res)
                            alert('Player criado.')
                        })
                    }} />
            }
            identifier="CreateNewPlayerModal"
            title="Cadastrar novo player" />
        <Modal
            identifier="ShowAllJunkFoodsModal"
            title="Cadastrar nova sprint" />
        <Modal
            body={
                <Form
                    identifier="CreateNewJunkFoodForm"
                    inputs={[{ name: "Nome", type: "text" }]}
                    submitFunction={() => {
                        var name = document.getElementById('CreateNewJunkFoodFormInputNome').value;
                        var data = {
                            name
                        }
                        console.log(data);
                        Axios.post('http://localhost:8080/junk-foods', data).then((res) => {
                            console.log(res)
                            alert('Porcaria cadastrada.')
                        })
                    }} />
            }
            identifier="CreateNewJunkFoodModal"
            title="Cadastrar nova porcaria" />
    </ BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
