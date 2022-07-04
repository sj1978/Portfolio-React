import './App.css';
import Navbar from './Navbar';
import {Home} from './Home';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
  <Home />
    <main className="main">
      <Content />
    </main>
    <Footer />
    </div>
  );
}

export default App;
