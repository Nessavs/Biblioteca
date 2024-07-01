import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Home() {
  const [categorias, setCategorias] = useState([]);
  const [livros, setLivros] = useState([]);

  const listarCategorias = async () => {
    const { data } = await axios.get('http://localhost:4000/categoria');
    setCategorias(data);
  };

  const listarLivros = async (id) => {
    const { data } = await axios.get('http://localhost:4000/livro/categoria/' + id);
    setLivros(data);
  };

  useEffect(() => {
    listarCategorias();
  }, []);

  return (
    <>
      <Row>
        <Col>
          {categorias.map((c, i) => (
            <Button onClick={() => listarLivros(c.idcategoria)}> {c.categoria} </Button>
          ))}
        </Col>
      </Row>

      <Row>
        { livros.map((l, i) => (
        <Col lg= {4} md={3}>
          <Card>
            <Card.Img variant="top" src="./livro.png" />
            <Card.Body>
              <Card.Title>{l.titulo}</Card.Title>
              <Card.Text>
                  {l.resumo}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Publicado em {l.ano}o</ListGroup.Item>
              <ListGroup.Item>Número de páginas {l.paginas}</ListGroup.Item>
              <ListGroup.Item>Edição {l.edicao}</ListGroup.Item>
              <ListGroup.Item>Editora {l.editora}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Link to={'/emprestar/'+ l.idlivro} hidden={l.emprestado}>Emprestar</Link>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </>
  );
}