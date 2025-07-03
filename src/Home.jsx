import React from 'react'
import {Container, Form, Table, Button} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

function Home() {
    

    return (
        <>
            <Container>
                    <h1>¡Bienvenid@ a nuestra escuela!</h1>

                    <div style={{padding: "1rem"}}>
                        <h3>Encontraras herramientas variadas para poder desarrollarte en tu camino hacia la programación</h3><br />

                        <h2>Desde nuestra sección de <Button><Link to="/Cursos" className='nav-link'>Cursos</Link></Button></h2><br />

                        <h2>Nuestra sección de herramientas <Button><Link to="/Cheatsheet" className='nav-link'>Cheatsheets</Link></Button>
                        </h2>
                    </div>
            </Container>
        </>
    )
}

export default Home