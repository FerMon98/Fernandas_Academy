import { useState, useEffect } from "react";
import { Dropdown, Form, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Login() {

    const [username, setUserName] = useState("Fernanda");
    const [password, setPassword] = useState(1234);


    const handleLogin = () => {
        e.preventDefault();
        
    };


    return (
        <Form style={{ backgroundColor: "navy", color: "white", padding: "2rem", borderRadius: "15px" }} onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => setUserName(e.target.value)} required />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Login;
