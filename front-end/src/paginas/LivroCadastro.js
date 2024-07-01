import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function LivroCadastro() {
    //Esta linha pega o Id da url em caso de edição
    const { id } = useParams();

    //Cria um navegador para executar links
    const navigate = useNavigate();

    //Declarar uma variável useState para cada campo da tabela
    const [titulo, setTitulo] = useState('');
    const [ano, setAno] = useState('');
    const [paginas, setPaginas] = useState('');
    const [edicao, setEdicao] = useState('');
    const [resumo, setResumo] = useState('');
    const [idcategoria, setIdCategoria] = useState('');
    const [ideditora, setIdEditora] = useState('');

    //Volta para a tela de editoras
    const voltar = () => {
        navigate('/livros');
    }

    //Selecionar o registro no banco de dados para editação
    const selecionar = async () => {
        const { data } = await axios.get(`http://localhost:4000/livro/${id}`);
        setTitulo(data.titulo);
        setAno(data.ano);
        setPaginas(data.paginas);
        setEdicao(data.edicao);
        setResumo(data.resumo);
        setIdCategoria(data.idcategoria);
        setIdEditora(data.ideditora);
    }

    //Método que verifica qual ação deve ser executada
    const salvar = () => {
        if (id)
            alterar();
        else
            inserir();
    }

    const inserir = async () => {
        const json = {
            "titulo": titulo,
            "ano": ano,
            "paginas": paginas,
            "edicao": edicao,
            "resumo": resumo,
            "idcategoria": idcategoria,
            "ideditora": ideditora
        };
        await axios.post(`http://localhost:4000/livro`, json);
        voltar();
    }

    const alterar = async () => {
        const json = {
            "titulo": titulo,
            "ano": ano,
            "paginas": paginas,
            "edicao": edicao,
            "resumo": resumo,
            "idcategoria": idcategoria,
            "ideditora": ideditora
        };
        await axios.put(`http://localhost:4000/livro/${id}`, json);
        voltar();
    }

    const excluir = async () => {
        if (window.confirm('Deseja excluir agora?')) {
            await axios.delete(`http://localhost:4000/livro/${id}`);
            voltar();
        }
    }

    //Inicia a tela buscando o registro em caso de edição
    useEffect(() => {
        if (id)
            selecionar();
    }, []);


    return (
        <>
            <h1>{(id) ? 'Alterar livro' : 'Inserir livro'}</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Titulo do livro</Form.Label>
                    <Form.Control type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Ano</Form.Label>
                    <Form.Control type="text"
                        value={ano}
                        onChange={(e) => setAno(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Paginas</Form.Label>
                    <Form.Control type="text"
                        value={paginas}
                        onChange={(e) => setPaginas(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Edicao</Form.Label>
                    <Form.Control type="text"
                        value={edicao}
                        onChange={(e) => setEdicao(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Resumo</Form.Label>
                    <Form.Control as="textarea" rows={5} value={resumo}
                        onChange={(e) => setResumo(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control type="text"
                        value={idcategoria}
                        onChange={(e) => setIdCategoria(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Editora</Form.Label>
                    <Form.Control type="text"
                        value={ideditora}
                        onChange={(e) => setIdEditora(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="button"
                    onClick={() => salvar()}>
                    Salvar
                </Button>

                <Button variant="secondary" type="button"
                    onClick={() => voltar()}>
                    Cancelar
                </Button>

                <Button variant="danger" type="button" hidden={!id}
                    onClick={() => excluir()}>
                    Excluir
                </Button>
            </Form>
        </>

    );
}