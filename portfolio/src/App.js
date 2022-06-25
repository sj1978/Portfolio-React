import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='anibal'>Anibal Amoroso</h1>
      <h2 className='dev'>Full-Stack Developer</h2>
    <main className="main">
      <Content />
    </main>
    <Footer />
    </div>
  );
}

export default App;
