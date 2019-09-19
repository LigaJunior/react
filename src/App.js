import React, {Component} from 'react';
import './App.css';
import PlayerList from './PlayerList';
import Sprint from './Sprint';
import Choco from './Choco';
import {
  Card, CardFooter, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class App extends Component {
 
render(){
  return(


    <div class='App'>
      <div class='App-header'>
      <Button>Criar Sprint</Button>      
      <Button>Inserir Player</Button>
      <Button>Inserir Comida</Button>
      <Button>Criar Sprint</Button>
      
      </div>
      <div class='carregamentos'>
      <PlayerList/>
      <Sprint/>
      <Choco/>
      </div>
      

      </div>
  

        );

  
}
}
export default App