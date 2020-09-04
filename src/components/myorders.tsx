import React, { useState, useEffect } from 'react';


interface AppProps {
    products: string[],
    orders: string[],
    changeHeader: (e: string) => void
}
export const MyOrders: React.FC<AppProps> = (props) => {

  const [myorders, setMyOrders] = useState({
      items:[]
  });
  useEffect(()=>{
    let items:any = [];  
    props.orders.map((e)=>{
        let newobj: any =e;
        let prod: any = props.products || null; 
        let p: any = prod.books[newobj.id];
        items.push({
            ...newobj,
            author:p.author,
            price:p.price,
            title:p.title,
            img:p.img
        })
    });
    setMyOrders({...myorders, items:items})
    props.changeHeader('My Orders')
  },[]);

  const renderOrders = () =>{
      let ord;

      ord = myorders.items.map((p)=>{
        let newobj: any =p;
            return (
                <div className={'product-container'} key={newobj.id}>
                        <div className="product-container-head">
                            <div className="left">Order Placed: <strong>{newobj.transDate}</strong></div>
                            <div className="right">Status: <strong>{newobj.status}</strong></div>
                        </div>
                        <div className={'product-grid'}>
                            <div className={'col-2 product-container-img'}>
                                <img src={newobj.img} />
                            </div>
                            <div className={'col-8 product-container-details'}>
                                <span><strong>{newobj.title}</strong></span>
                                <div className={'label'}>Author: {newobj.author}</div>
                                <div className={'label'}>Book Price: ${newobj.price.toFixed(2)}</div>
                            </div>
                        </div>    
                    </div>
                );
        })

        return ord;
  }


  return (
    <>
		<div className="container app-body">
            {renderOrders()}
		</div>
    </>
  );
}

