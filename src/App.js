import './App.css';
import { commerce } from './lib/commerce';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'

function App() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async() => {
    const { data } = await commerce.products.list();
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  console.log(products)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" >
              <Home products={products} />
          </Route>
          {/* <Route path="/" component={Home} props={products} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
