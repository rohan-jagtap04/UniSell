import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import {Products, Navbar, Cart, Checkout} from './components';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async() => {
        const {data} = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () => {
        commerce.cart.retrieve().then(res => setCart(res));
    }

    const handleAddToCart = async (productId, quantity) => {
        const {cart} = commerce.cart.add(productId, quantity).then((res) => setCart(res)).catch((err) => console.log(`Error! ${err}`));
    }

    const handleUpdateCartQty = async(productId, quantity) => {
        const {cart} = commerce.cart.update(productId, {quantity}).then(res => setCart(res)).catch((err) => console.log(`Error! ${err}`));
    }

    const handleRemoveFromCart = async (productId) => {
        const {cart} = commerce.cart.remove(productId).then(res => setCart(res)).catch((err) => console.log(`Error! ${err}`));
    }

    const handleEmptyCart = async () => {
        const {cart} = commerce.cart.empty().then(res => setCart(res)).catch((err) => console.log(`Error! ${err}`));
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [])
    
    return( 
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart}/>
                    </Route>
                    <Route exact path="/cart">
                        <Cart 
                            cart={cart} 
                            handleUpdateCartQty = {handleUpdateCartQty}
                            handleRemoveFromCart = {handleRemoveFromCart}
                            handleEmptyCart = {handleEmptyCart}
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout cart={cart}></Checkout>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;