import './App.css';
import { Footer } from './layouts/Homepage/Footer';
import { HomePage } from './layouts/Homepage/HomePage';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
