import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Home from './components/home';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
       <Header/>
       <Home/>
       <Footer/>
    </div>
  );
}

export default App;
