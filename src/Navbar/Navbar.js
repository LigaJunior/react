import React from 'react'
import Dropdown from '../NavbarDropdown/NavbarDropdown'

const Navbar = () => (
    <nav className="navbar navbar-expand-xl navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="/">POC-QUARKUS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <Dropdown title="Sprint"
                        itens={[{
                            name: "Começar nova", action: () => {
                                console.log("Começar nova sprint")
                            }
                        }]}
                        posDivider={[{
                            name: "Ver todas as sprints", action: () => {
                                console.log("Ver todas as sprints")
                            }
                        }]} />
                    <Dropdown title="Players" itens={[{
                        name: "Lista de players", action: () => {
                            console.log("Lista de players")
                        }
                    }, {
                        name: "Adicionar novo", action: () => {
                            console.log("Adicionar novo player")
                        }
                    }]} />
                    <Dropdown title="Porcarias" itens={[{
                        name: "Lista de porcarias", action: () => {
                            console.log("Lista de porcarias")
                        }
                    }, {
                        name: "Adicionar nova", action: () => {
                            console.log("Adicionar nova porcaria")
                        }
                    }]} />
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;