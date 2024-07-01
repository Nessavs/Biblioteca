import TituloListagem from "../componentes/TituloListagem";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function PessoaHistorico(id) {
    const [dados, setDados] = useState([]);

    const listar = async (id) => {
        const { data } = await axios.get('http://localhost:4000/emprestimo/pessoa/'+ id);
        setDados(data);
    };

    useEffect(() => {
        listar(id);
    }, []);

    return (
        <>
            <TituloListagem titulo="Listagem do histórico de livros emprestados da pessoa"
                subtitulo="Neste local você visualiza todos os emprestimos que uma pessoa ja fez."
                url="/autor" />

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Código</th>
                        <th>Livro</th>
                        <th>data emprestimo</th>
                        <th>data vencimento</th>
                        <th>data devolução</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((d, i) => (
                        <tr key={i}>
                            <td>{d.idemprestimo}</td>
                            <td>{d.idlivro} - {d.livro.titulo}</td>
                            <td>{d.emprestimo}</td>
                            <td>{d.vencimento}</td>
                            <td>{d.devolucao}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}