import './App.css';
import { commerce } from './lib/commerce';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Shop from './components/Shop';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  const fetchProducts = async() => {
    let {data} = await commerce.products.list();
    setProducts(data)
  }

  const fetchCart = async() => {
    await commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    }).catch((error) => {
      console.error('There was an error fetching the cart', error);
    });
  }

  const handleAddToCart = async(productId, quantity) => {
      const item = await commerce.cart.add(productId, quantity);

      setCart(item.cart);

      console.log(cart)
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])
  

  // console.log(products)
  // console.log(cart.total_items)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
                <Home totalItems={cart.total_items} handleAddToCart={handleAddToCart} products={products} />
          </Route>
          <Route  path="/cart" >
                <Cart cart={cart} totalItems={cart.total_items} />
            </Route>
            <Route path="/contact" >
                <Contact totalItems={cart.total_items} />
            </Route>
            <Route path="/shop" >
                <Shop totalItems={cart.total_items} />
            </Route>
          {/* <Route path="/" component={Home} props={products} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
