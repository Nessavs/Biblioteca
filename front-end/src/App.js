
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu';
import Home from './paginas/Home';
import Autor from './paginas/Autor';
import AutorCadastro from './paginas/AutorCadastro';
import Categoria from './paginas/Categoria';
import CategoriaCadastro from './paginas/CategoriaCadastro';
import Editora from './paginas/Editora';
import EditoraCadastro from './paginas/EditoraCadastro';
import Pessoa from './paginas/Pessoa';
import PessoaCadastro from './paginas/PessoaCadastro';
import Livro from './paginas/Livro';
import LivroCadastro from './paginas/LivroCadastro';

function App() {
  return (
    <div>
      <Menu />
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/autores' element={<Autor />} />
            <Route path='/autor' element={<AutorCadastro />} />
            <Route path='/autor/:id' element={<AutorCadastro />} />
            <Route path='/categorias' element={<Categoria />} />
            <Route path='/categoria' element={<CategoriaCadastro />} />
            <Route path='/categoria/:id' element={<CategoriaCadastro />} />
            <Route path='/editoras' element={<Editora />} />
            <Route path='/editora' element={<EditoraCadastro />} />
            <Route path='/editora/:id' element={<EditoraCadastro />} />
            <Route path='/pessoas' element={<Pessoa />} />
            <Route path='/pessoa' element={<PessoaCadastro />} />
            <Route path='/pessoa/:id' element={<PessoaCadastro />} />
            <Route path='/livros' element={<Livro />} />
            <Route path='/livro' element={<LivroCadastro />} />
            <Route path='/livro/:id' element={<LivroCadastro />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;