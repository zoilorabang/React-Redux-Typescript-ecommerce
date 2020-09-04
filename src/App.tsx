import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps  } from "react-router-dom";
import {
Header,
Footer,
Home,
Product
} from './components';
import { useSelector, useDispatch } from 'react-redux';
import {BaseState} from './reducers';
import {fetchProduct} from './utilities/api';
import {
  addToCartAction,
  productsAction
} from './actions'




const App: React.FC<{}> = (props) => {
  const products = useSelector<BaseState, BaseState['products']>(
    (state) => state.products
  );

  const cart = useSelector<BaseState, BaseState['cart']>(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const onAddToCart = (product: string[]) =>{
    dispatch(addToCartAction(product));  
  }
  const getProducts = (product: string[]) =>{
    dispatch(productsAction(product));  
  }
  useEffect(()=>{
    /** fetch products */
    fetchProduct().then((r)=>{
      const response = r.parsedBody;
      getProducts(response.books);
    });
  },[]);

  return (
  <React.Fragment>
        <div className="App">
            <Router>
								<Header {...props}/>
									<Route path="/" exact component={(props: any)=> <Home {...props} addCart={onAddToCart} products={products}/>} />
                  <Route path="/product/:id" exact component={(props: any)=> 
                  <Product {...props} 
                  addCart={onAddToCart} 
                  products={products}
                  cart={cart}
                  />} />
                  <Route path="/myorders" exact component={(props: any)=> <Home addCart={onAddToCart} products={products}/>} />
                  <Route path="/cart" exact component={(props: any)=> <Home addCart={onAddToCart} products={products}/>} />
								<Footer />
						</Router>      
        </div>
  </React.Fragment>

  );
}

export default App;
