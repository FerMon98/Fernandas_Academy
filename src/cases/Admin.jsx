import { useState, useEffect } from "react";
import { Dropdown, Form, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getImagePath } from "../cases/getImagePath.js";
import CJson from "../Cursos.json";

function Cursos() {
  const [listado, setListado] = useState([]);
  const [texto, setTexto] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setListado(CJson);
  }, []);

  function addItem(curso, imgCurso) {
    navigate(`/Cursos/${curso.id}`, { state: { curso, imgCurso } });
  }

  // Remove by course ID
  function handleDelete(cursoId) {
    setListado((prev) => prev.filter((c) => c.id !== cursoId));
  }

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/Home");
  };


  const filteredCursos = listado
    .filter((curso) =>
      texto === "" ||
      curso.titulo.toLowerCase().includes(texto.toLowerCase())
    )
    .filter((curso) => category === "" || curso.categoria === category)
    .filter((curso) => level === "" || curso.nivel === level);

  return (
    <>
      {/* Search and Filters */}
      <Row className="align-items-center mb-2 pt-2">
        <Col md={6}>
          <Form className="d-flex pb-2" onSubmit={(e) => { e.preventDefault()}}>
            <Form.Control type="search" placeholder="Buscar curso" className="me-2" aria-label="Buscar" value={texto} onChange={(e) => setTexto(e.target.value)} />
            <Button variant="primary" type="submit"> Buscar </Button>
          </Form>
        </Col>

        <Col md="auto">
          <Dropdown className="pb-2">
            <Dropdown.Toggle variant="success" id="dropdown-categoria"> Categoría  </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setCategory("frontend")}> Frontend </Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("backend")}> Backend </Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("devops")}> DevOps </Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("herramientas")}> Herramientas </Dropdown.Item>
              <Dropdown.Item onClick={() => setCategory("")}> Todas </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col>
          <Dropdown className="pb-2">
            <Dropdown.Toggle variant="success" id="dropdown-nivel"> Nivel </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setLevel("basico")}> Básico </Dropdown.Item>
              <Dropdown.Item onClick={() => setLevel("intermedio")}> Intermedio </Dropdown.Item>
              <Dropdown.Item onClick={() => setLevel("avanzado")}> Avanzado </Dropdown.Item>
              <Dropdown.Item onClick={() => setLevel("")}> Todos  </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col className="pb-2">
          <Button variant="warning" onClick={handleLogout}>Cerrar sesión</Button>
        </Col>
      </Row>

      {/* No Results Message */}
      {filteredCursos.length === 0 ? (
        <p className="text-muted text-center pt-4 pb-4">
          No existen cursos con ese título
        </p>
      ) : (
        <Row className="g-3">
          {filteredCursos.map((curso) => {
            const imgCurso = getImagePath(curso.categoria);

            return (
              <Col md={3} sm={6} xs={12} key={curso.id}>
                <Card
                  style={{ backgroundColor: "lightgrey", height: "100%" }}
                >
                  <Card.Img style={{ height: "6rem", objectFit: "cover" }} src={imgCurso} alt={curso.categoria} />
                  <Card.Body>
                    <Card.Title>{curso.titulo}</Card.Title>
                    <Card.Text>
                      <strong>Categoría:</strong>{" "} {curso.categoria[0].toUpperCase() + curso.categoria.slice(1)}
                      <br />
                      <strong>Nivel:</strong>{" "}
                      {curso.nivel[0].toUpperCase() + curso.nivel.slice(1)}
                    </Card.Text>
                    <Button variant="primary" onClick={() => addItem(curso, imgCurso)}> Ver más </Button>{" "}
                    <Button variant="danger" onClick={() => handleDelete(curso.id)} > Eliminar </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
}

export default Cursos;
