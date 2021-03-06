import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
function App() {
  return (
    <div>
      <Header></Header>
      <header>
        <nav className='nav-div'>
          <a href="/Shop">Shop</a>
          <a href="/Online Review">Online Review</a>
          <a href="/Manage">Manage Inventory Here</a>
        </nav>
        <div className='search'>
          <input type="search" name="" id="" placeholder="Type here to search"/>
        </div>
      </header>
      <Shop></Shop>
    </div>
  );
}

export default App;
