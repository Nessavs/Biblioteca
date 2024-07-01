import livro from "../model/LivroModel.js"

async function listar(req, res) {
    await livro
        .findAll()
        .then(resultado => { res.status(200).json(resultado) })
        .catch(erro => { res.status(500).json(erro) });
}

async function selecionar(req, res) {
    await livro
        .findByPk(req.params.idlivro)
        .then(resultado => { res.status(200).json(resultado) })
        .catch(erro => { res.status(500).json(erro) });
}

async function criar(req, res) {
    if (!req.body.titulo || !req.body.ano || !req.body.paginas || !req.body.edicao || !req.body.idcategoria || !req.body.ideditora)
        res.status(500).send("Parametro titulo, ano, paginas, edicao, ideditora e idcategoria é obrigatório.");

    await livro
        .create({
            titulo: req.body.titulo,
            ano:  req.body.ano,
            paginas:  req.body.paginas,
            edicao:  req.body.edicao,
            resumo:  req.body.resumo,
            ideditora:  req.body.ideditora,
            idcategoria:  req.body.idcategoria
        })
        .then(resultado => { res.status(200).json(resultado) })
        .catch(erro => { res.status(500).json(erro) });
}

async function alterar(req, res) {
    if (!req.body.titulo || !req.body.ano || !req.body.paginas || !req.body.edicao || !req.body.idcategoria || !req.body.ideditora)
        res.status(500).send("Parametro titulo, ano, paginas, edicao, ideditora e idcategoria é obrigatório.");

    await livro
        .update({
            titulo: req.body.titulo,
            ano:  req.body.ano,
            paginas:  req.body.paginas,
            edicao:  req.body.edicao,
            resumo:  req.body.resumo,
            ideditora:  req.body.ideditora,
            idcategoria:  req.body.idcategoria
        },
            {
                where: {
                    idlivro: req.params.idlivro
                }
            })
        .then(resultado => { res.status(200).json(resultado) })
        .catch(erro => { res.status(500).json(erro) });
}

async function excluir(req, res) {
    await livro
        .destroy(
            {
                where: {
                    idlivro: req.params.idlivro
                }
            })
        .then(resultado => { res.status(200).json(resultado) })
        .catch(erro => { res.status(500).json(erro) });
}

export default { listar, selecionar, criar, alterar, excluir };