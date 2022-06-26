import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import FloatingNav from './Components/FloatingNav/FloatingNav';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Nav />
      <FloatingNav />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
