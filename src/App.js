import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Review from './components/Cart Review/Review';
import Inventory from './components/Manage Inventory/Inventory';
import NotFound from './components/Not Found/NotFound';
import Details from './components/Product Details/Details';
import PlaceOrder from './components/Place Order/PlaceOrder';
function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/product/:productKey'>
            <Details></Details>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
          <Route path='/place'>
            <PlaceOrder></PlaceOrder>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
