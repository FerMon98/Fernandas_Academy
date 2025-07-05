import React from 'react'
import {Container} from 'react-bootstrap'

function NotFound () {

    return (
        <>
            <Container style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <img src="https://http.dog/404.jpg" alt="Not found" style={{height:"35rem", padding:"1rem", width:"60%", borderRadius: "25px"}}/>
            </Container>
        </>
    )
}

export default NotFound