
import './App.css';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Extracirricular from './components/Extracirricular';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
          <a href="#" class = "tab">Hero</a>
          <a href="#" class = "tab">About</a>
          <a href="#" class = "tab">Education</a>
          <a href="#" class = "tab">Experience</a>
          <a href="#" class = "tab">Extracirricular</a>
          <a href="#Footer" class = "tab">Footer</a>
      </nav>
      <Hero/>
      <About/>
      <Education/>
      <Experience/>
      <Extracirricular/>
      <section id="Footer">
        <Footer/>
      </section>
      

    </div>
  );
}

export default App;
