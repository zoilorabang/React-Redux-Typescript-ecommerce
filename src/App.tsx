import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps  } from "react-router-dom";
import {
Header,
Footer,
Home,
Product,
Cart,
MyOrders
} from './components';
import { useSelector, useDispatch } from 'react-redux';
import {BaseState} from './reducers';
import {fetchProduct} from './utilities/api';
import {
  addToCartAction,
  productsAction,
  changeHeader,
  ordersAction,
  resetCartAction
} from './actions'



const App: React.FC<{}> = (props) => {
  const products = useSelector<BaseState, BaseState['products']>(
    (state) => state.products
  );

  const cart = useSelector<BaseState, BaseState['cart']>(
    (state) => state.cart
  );

  const orders = useSelector<BaseState, BaseState['orders']>(
    (state) => state.orders
  );

  const currentHeader = useSelector<BaseState, BaseState['header']>(
    (state) => state.header
  );

  const dispatch = useDispatch();

  const onAddToCart = (product: any) =>{
    dispatch(addToCartAction(product));  
  }

  const resetCartAction = () =>{
    dispatch(resetCartAction());  
  }
  
  const onCheckout = (product: any) =>{
    dispatch(ordersAction(product));  
  }

  const onHeaderChange = (header: string) =>{
    dispatch(changeHeader(header));  
  }

  const getProducts = (product: string[]) =>{
    dispatch(productsAction(product));  
  }
  useEffect(()=>{
    /** fetch products */
    fetchProduct().then((r)=>{
      const response = r.parsedBody;
      getProducts(response);
    });
  },[]);

  return (
  <React.Fragment>
        <div className="App">
            <Router>
								<Header {...props} curHeader={currentHeader} cart={cart}/>
									<Route path="/" exact component={(props: any)=> <Home {...props} addCart={onAddToCart} products={products} changeHeader={onHeaderChange}/>} />
                  <Route path="/product/:id" exact component={(props: any)=> <Product {...props} addCart={onAddToCart} products={products} cart={cart} changeHeader={onHeaderChange} />} />
                  <Route path="/myorders" exact component={(props: any)=> <MyOrders {...props} products={products} changeHeader={onHeaderChange} orders={orders}/>} />
                  <Route path="/cart" exact component={(props: any)=> <Cart {...props} cart={cart} addCart={onAddToCart} products={products} changeHeader={onHeaderChange} checkout={onCheckout} reset={resetCartAction} myorders={orders}/>} />
								<Footer />
						</Router>      
        </div>
  </React.Fragment>

  );
}

export default App;
