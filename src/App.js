import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components_new/Home';
import Shop from './components_new/Shop';
import Cart from './components_new/Cart';
// import Checkout from './components_new/Checkout';
import Contact from './components_new/Contact';
import { Checkout } from './components';
import { commerce } from './lib/commerce';

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
                <Home totalItems={cart.total_items} 
                      handleAddToCart={handleAddToCart} 
                      products={products} 
                />
          </Route>
          <Route  path="/cart" >
                <Cart
                   handleUpdateCartQty={handleUpdateCartQty} 
                   handleRemoveFromCart={handleRemoveFromCart} 
                   handleEmptyCart={handleEmptyCart} 
                   cart={cart} 
                   totalItems={cart.total_items} 
                  />
            </Route>
            <Route  path="/checkout" >
                <Checkout
                   handleUpdateCartQty={handleUpdateCartQty} 
                   handleRemoveFromCart={handleRemoveFromCart} 
                   handleEmptyCart={handleEmptyCart} 
                   cart={cart} 
                   totalItems={cart.total_items} 
                  />
            </Route>
            <Route path="/contact" >
                <Contact totalItems={cart.total_items} />
            </Route>
            <Route path="/shop" >
                <Shop 
                    handleAddToCart={handleAddToCart} 
                    products={products} 
                    totalItems={cart.total_items} 
                />
            </Route>
          {/* <Route path="/" component={Home} props={products} /> */}
        </Switch>
      </Router>
      <div>
        {/* <Footer/> */}
      </div>
    </div>
  );
};

export default App;
