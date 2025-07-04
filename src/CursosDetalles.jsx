import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import CJson from "./Cursos.json";
import { getImagePath } from "./cases/getImagePath.js";

function CursosDetalles() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const stateCurso = location.state?.curso;
    const [curso, setCurso] = useState(stateCurso || null);

    useEffect(() => {
        if (!stateCurso) {
            const found = CJson.find((c) => String(c.id) === id);
            setCurso(found || null);
        }
    }, [id, stateCurso]);

    if (!curso) {
        return <p>Curso con ID {id} no encontrado.</p>;
    }

    const imgCurso = location.state?.imgCurso || getImagePath(curso.categoria);

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>{curso.titulo}</h2>
            <Card
                style={{
                    backgroundColor: "lightgrey",
                    width: "100%",
                    maxWidth: "600px",
                    margin: "0 auto",
                }}
            >
                <Card.Img
                    src={imgCurso}
                    alt={curso.categoria}
                    style={{ height: "17rem", objectFit: "cover" }}
                />
                <Card.Body>
                    <Card.Title>{curso.titulo}</Card.Title>
                    <Card.Text>
                        <strong>Categoría:</strong>{" "}
                        {curso.categoria?.[0]?.toUpperCase() + curso.categoria?.slice(1)}
                        <br />
                        <strong>Nivel:</strong>{" "}
                        {curso.nivel?.[0]?.toUpperCase() + curso.nivel?.slice(1)}
                        <br />
                        <strong>Detalles:</strong> {curso.descripcion}
                    </Card.Text>
                </Card.Body>
            </Card> <br />
            <Button
                onClick={handleGoBack}
                style={{ padding: "10px", cursor: "pointer" }}
            >
                Go Back
            </Button>
        </div>
    );
}

export default CursosDetalles;
