import TituloListagem from "../componentes/TituloListagem";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";

export default function Devolver() {
  const [dados, setDados] = useState([]);

  const listar = async () => {
    const { data } = await axios.get('http://localhost:4000/emprestimo/pendentes');
    setDados(data);
  };

  useEffect(() => {
    listar();
  }, []);

  const devolver = async (idemprestimo) => {
    if (window.confirm('Deseja devolver agora?')) {
      const json = {
        "idemprestimo": idemprestimo
      };
      await axios.post(`http://localhost:4000/devolver`, json);
      listar();
    }
  }

  return (
    <>
      <TituloListagem titulo="Listagem de emprestimos pendentes"
        subtitulo="Neste local você visualiza todos os emprestimos pendentes de devolução." 
        url="" />

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Código</th>
            <th>Livro</th>
            <th>Pessoa</th>
            <th>Data emprestimo</th>
            <th>Data vencimento</th>

          </tr>
        </thead>
        <tbody>
          {dados.map((d, i) => (
            <tr key={i}>
              <td>
                <Button onClick={() => devolver(d.idemprestimo)}
                  className='btn btn-primary'>Devolver</Button>
              </td>
              <td>{d.idemprestimo}</td>
              <td>{d.idlivro} - {d.livro.titulo}</td>
              <td>{d.idpessoa} - {d.pessoa.pessoa}</td>
              <td>{d.emprestimo}</td>
              <td>{d.vencimento}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}