
import './App.css';
import About from './components/About';
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
          <a href="#" class = "tab">Footer</a>
      </nav>
      <Hero/>
      <About/>

    </div>
  );
}

export default App;
