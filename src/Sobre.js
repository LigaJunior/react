import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
function Sobre() {
  return (
    
    <div className="App">
      
      <header className="App-header">
      <Row>
      <Link to="/">
      <Button color="danger">🐑 SPRINT</Button>
      </Link> 
      <Link to="/sobre">
     <Button color="danger">🐑 Sobre</Button>
     </Link> 
     </Row>
      </header>
    </div>
     
  );
}

export default Sobre;
