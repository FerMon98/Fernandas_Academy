import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const allowedUser = {
    username: "fernanda@fernanda.com",
    password: "1234"
};

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === allowedUser.username && password === allowedUser.password) {
            localStorage.setItem("auth", "true");
            navigate("/Admin");
        } else {
            setError("Usuario o contraseña inválidos");
        }
    };

    return (
        <Form style={{ backgroundColor: "navy", color: "white", padding: "2rem", margin: "0 auto", borderRadius: "15px", width: "80%" }} onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUsername(e.target.value)} required />
                <Form.Text className="text-white"> We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
}

export default Login;