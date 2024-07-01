import express from "express";
import banco from "./banco.js";
import categoria from "./controller/Categoria.js";
import autor from "./controller/Autor.js";
import editora from "./controller/Editora.js";
import pessoa from "./controller/Pessoa.js";
import livro from "./controller/Livro.js";
import livroautor from "./controller/LivroAutor.js";
import cors from "cors";

try {
    await banco.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const app = express();
app.use(express.json());
app.use(cors());

app.get('/teste', (request, response) => {
    response.status(200).send('Requisição recebida.');
});

app.post("/teste-parametros/:rp1/:rp2", (request, response) => {
    console.log('Route Params');
    console.log(request.params);

    console.log('Query Params');
    console.log(request.query);

    console.log('Body Params');
    console.log(request.body);

    console.log('Headers Params');
    console.log(request.headers);

    response.status(200).send(request.body.titulo);
});

app.get("/categoria", categoria.listar);
app.get("/categoria/:idcategoria", categoria.selecionar);
app.post("/categoria", categoria.criar);
app.put("/categoria/:idcategoria", categoria.alterar);
app.delete("/categoria/:idcategoria", categoria.excluir);

app.get("/autor", autor.listar);
app.get("/autor/:idautor", autor.selecionar);
app.post("/autor", autor.criar);
app.put("/autor/:idautor", autor.alterar);
app.delete("/autor/:idautor", autor.excluir);

app.get("/editora", editora.listar);
app.get("/editora/:ideditora", editora.selecionar);
app.post("/editora", editora.criar);
app.put("/editora/:ideditora", editora.alterar);
app.delete("/editora/:ideditora", editora.excluir);

app.get("/pessoa", pessoa.listar);
app.get("/pessoa/:idpessoa", pessoa.selecionar);
app.post("/pessoa", pessoa.criar);
app.put("/pessoa/:idpessoa", pessoa.alterar);
app.delete("/pessoa/:idpessoa", pessoa.excluir);

app.get("/livro", livro.listar);
app.get("/livro/:idlivro", livro.selecionar);
app.post("/livro", livro.criar);
app.put("/livro/:idlivro", livro.alterar);
app.delete("/livro/:idlivro", livro.excluir);

app.get("/livroautor", livroautor.listar);
app.get("/livroautor/:idlivroautor", livroautor.selecionar);
app.post("/livroautor", livroautor.criar);
app.put("/livroautor/:idlivroautor", livroautor.alterar);
app.delete("/livroautor/:idlivroautor", livroautor.excluir);

app.listen(4000);