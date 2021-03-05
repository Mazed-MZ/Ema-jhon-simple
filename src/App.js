import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
function App() {
  return (
    <div>
      <Header></Header>
      <header>
        <nav className='nav-div'>
          <a href="">Shop</a>
          <a href="">Online Review</a>
          <a href="">Manage Inventory Here</a>
        </nav>
      </header>
      <Shop></Shop>
    </div>
  );
}

export default App;
