import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import Main from './componentes/Main';
import Menu from './componentes/Menu';

function App() {
  return (
    <div className="App-header">
      <Header/>
      <Menu/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
