import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='anibal'>Anibal Amoroso</h1>
    <main className="main">
      <Content />
    </main>
    <Footer />
    </div>
  );
}

export default App;
