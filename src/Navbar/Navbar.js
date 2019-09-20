import React from 'react'
import Dropdown from '../NavbarDropdown/NavbarDropdown'

const Navbar = () =>(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">JUNKFOOD</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <Dropdown title="Sprint"
                    itens={["Começar nova"]}
                    posDivider={["Ver todas as sprints"]}/>
                <Dropdown title="Players" itens={["Lista de players","Adicionar novo"]}/>
                <Dropdown title="Porcarias" itens={["Lista de porcarias","Adicionar nova"]}/>
            </ul>
        </div>
    </nav>
);

export default Navbar;