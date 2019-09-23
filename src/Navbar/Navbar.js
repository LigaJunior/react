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
                            name: "Começar nova", target: "CreateNewSprintModal", toggle: "modal"
                        }]}
                        posDivider={[{
                            name: "Ver todas as sprints", href:"/sprints"
                        }]} />
                    <Dropdown title="Players" 
                        itens={[{
                            name: "Adicionar novo", target: "CreateNewPlayerModal", toggle: "modal"
                        }]}
                        posDivider={[
                            {
                                name: "Ver todos os players", href:"#"
                            }
                        ]} />
                    <Dropdown title="Porcarias" 
                        itens={[{
                            name: "Adicionar nova", target: "CreateNewJunkFoodModal", toggle: "modal"
                        }]}
                        posDivider={[
                            {
                                name: "Ver todas as porcarias", href:"#"
                            }
                        ]} />
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;