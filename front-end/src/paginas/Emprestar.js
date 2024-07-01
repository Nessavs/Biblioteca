import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Emprestar() {
  //Esta linha pega o Id da url em caso de edição
  const { idlivro } = useParams();

  //Cria um navegador para executar links
  const navigate = useNavigate();

  //Declarar uma variável useState para cada campo da tabela
  const [idpessoa, setIdPessoa] = useState('');





  //Volta para a tela inicial
  const voltar = () => {
    navigate('/');
  }

  //Selecionar o registro no banco de dados para editação
  // const selecionar = async () => {
  //     const { data } = await axios.get(`http://localhost:4000/autor/${id}`);
  //     setAutor(data.autor);
  // }

  //Método que verifica qual ação deve ser executada
  const salvar = () => {
    emprestar();
  }

  const emprestar = async () => {
    const json = {
      "idlivro": idlivro,
      "idpessoa": idpessoa
    };
    await axios.post(`http://localhost:4000/emprestar`, json);
    voltar();
  }

  // //Inicia a tela buscando o registro em caso de edição
  // useEffect(() => {
  //     if (id)
  //         selecionar();
  // }, []);


  return (
    <>
      <h1> 'Emprestar livro'</h1>
      <Form>

      <Form.Group className="mb-3">
          <Form.Label>Emprestando o livro {idlivro}</Form.Label>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Informe a pessoa que vai emprestar o livro</Form.Label>
          <Form.Control type="text"
            value={idpessoa}
            onChange={(e) => setIdPessoa(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="button"
          onClick={() => salvar()}>
          Salvar
        </Button>

        <Button variant="secondary" type="button"
          onClick={() => voltar()}>
          Cancelar
        </Button>
      </Form>
    </>

  );
}