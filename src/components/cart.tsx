import React, { useState, ChangeEvent, useEffect } from 'react';
import {fetchProductDetails} from '../utilities/api';
import { Link } from "react-router-dom";

interface AppProps {
    products: string[],
    cart: string[],
    changeHeader: (e: string) => void,
    checkout: (e: any) => void,
    reset: () => void,
    myorders: string[]
}
export const Cart: React.FC<AppProps> = (props) => {
   let propsData: any = props;

  const [cart,setProdToCart] = useState(props.cart || []);
  const [order, setOrder] = useState({
        items:[],
        itemPrice:0,
        total: 0,
        shipping: 5,
        tax: 7.50,
  });
  useEffect(()=>{
        let total:number =0 ,itemPrice: number =0, items_s:any =[];
        cart.forEach((c)=>{
            let p: any = prod.books[c];
            itemPrice+=parseInt(p.price);
            items_s.push(p.id);
        });
        total = itemPrice+order.shipping+order.tax;
        setOrder({
            ...order,
            itemPrice:itemPrice,
            total:total,
            items:items_s
        });
    props.changeHeader('Cart')
  },[]);

  const onCheckOut = () =>{
    let ords:any = [];
    order.items.forEach((e) => {
      ords.push({
        id:e,
        status:'Pending Delivery',
        transDate:getDate()
      })
    });
    props.checkout([
      ...props.myorders,
      ...ords
    ]);

  }

  const getDate = () =>{
    const newDate = new Date();
    const dd = String(newDate.getDate()).padStart(2, '0');
    const mm = String(newDate.getMonth() + 1).padStart(2, '0'); 
    const yyyy = newDate.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
  }

  let prod: any = props.products || null; 

  return (
    <>
		<div className="container app-body">
                <div className={'product-container'}>
                    <div className={'product-grid'}>
                        <div className={'col-6'}>
                            <h3>Shipping Address</h3>
                            <button className={'product-container-details-cart-btn'}>Save Address</button>
                            <button className={'product-container-details-cart-btn'}>Edit Address</button>
                        </div>
                        <div className={'col-6 '}>
                            <h3>Shopping Bag</h3>
                            
                            <div className={'orders'}>
                                {cart.map((c)=>{
                                    let p: any = prod.books[c];
                                    return (<div className={'order-item'}>
                                        <img src={p.img} width={50} />
                                        <span className={'order-item-title'}>{p.title} (${p.price.toFixed(2)})</span>
                                        <span className={'order-item-del'} id={p.id}>x</span>
                                    </div>)
                                })}
                                
                            </div>
                            <table>
                            <tr>
                              <th colSpan={2}>Payment Info</th>
                            </tr>
                            <tr>
                              <td>Item Price</td>
                              <td>${order.itemPrice.toFixed(2)}</td>
                            </tr>
                            <tr>
                              <td>Tax</td>
                              <td>${order.tax.toFixed(2)}</td>
                            </tr>
                            <tr>
                              <td>Shipping Change</td>
                              <td>${order.shipping.toFixed(2)}</td>
                            </tr>
                            <tr>
                              <td>Total</td>
                              <td>${order.total.toFixed(2)}</td>
                            </tr>
                          </table><br/>
                          <button className={'product-container-details-cart-btn'} onClick={onCheckOut}>Checkout</button>
                            <Link className={'product-container-details-buy-btn'} to={'/'}>Cancel</Link>
                        </div>
                    </div>    
                </div>
		</div>
    </>
  );
}

