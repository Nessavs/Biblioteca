import autor from './AutorModel';
import categoria from './CategoriaModel';
import editora from './EditoraModel';
import emprestimo from './EmprestimoModel';
import livro from './LivroModel';
import livroautor from './LivroAutorModel';
import pessoa from './PessoaModel';

categoria.hasMany(livro, {foreignKey: 'idcategoria'});
livro.belongsTo(categoria, {as: 'categoria', foreignKey: 'idcategoria'});

editora.hasMany(livro, {foreignKey: 'ideditora'});
livro.belongsTo(editora, {as: 'editora', foreignKey: 'ideditora'});

livro.hasMany(emprestimo, {foreignKey: 'idlivro'});
emprestimo.belongsTo(livro, {as: 'livro', foreignKey: 'idlivro'});

pessoa.hasMany(emprestimo, {foreignKey: 'idpessoa'});
emprestimo.belongsTo(pessoa, {as: 'pessoa', foreignKey: 'idpessoa'});

livroautor.belongsTo(autor, {as: 'autor', foreignKey: 'idautor'});
livroautor.belongsTo(livro, {as: 'livro', foreignKey: 'idlivro'});
