import React from 'react'
import {Container, Form, Table, Button} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

function Home() {
    

    return (
        <>
            <Container>
                    <h1>!Bienvenid@ a nuestra escuela!</h1>

                    <div>
                        <h3>Encontraras herramientas variadas para poder desarrollarte en tu camino hacia la programación</h3>
                        <h2>Desde nuestra sección de cursos:</h2>
                        <Link to="/Cursos" className='nav-link'>Cursos</Link> <br />

                        <h2>Nuestra sección de herramientas</h2>
                        <Link to="/Cheatsheet" className='nav-link'>Cheatsheet</Link>
                    </div>
            </Container>
        </>
    )
}

export default Home