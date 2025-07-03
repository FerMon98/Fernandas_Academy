import { useState, useEffect } from "react";
import { Dropdown, Form, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Login() {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    setUserName("Fernanda")
    setPassword(1234)

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const { token } = await response.json();

            // Store token securely
            localStorage.setItem("authToken", token);

            // Optionally store user info or update global auth context
            login(token); // from your AuthContext

            //Redirect after login
            navigate("/Admin");
        } else {
            console.error("Credenciales inválidas");
        }
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
