import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App-header">
      <Header />
      <Menu />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
