import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.scss";
import SaladMaker from "./views/SaladMaker";
import OrderForm from './views/OrderForm';

const App = () => {
  return (
    <Router>
      <div className="App">
      <Link to="/"> <h2>Salad Maker</h2> </Link>
      <Route exact path="/" component={SaladMaker}/>
      <Route exact path="/order-form" component={OrderForm}/>
      </div>
    </Router>
  );
};

export default App;
