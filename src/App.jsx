import Pages from './pages/Pages';
import Search from './components/Search';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
