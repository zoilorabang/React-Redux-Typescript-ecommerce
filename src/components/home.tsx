import React, { useState, ChangeEvent, useEffect } from 'react';
import { Link } from "react-router-dom";

interface AppProps{
    products: string[],
    addCart: (e: string[]) => void
}
export const Home: React.FC<AppProps> = (props) => {
  
  const products = props.products || [];
  
  useEffect(()=>{

  },[]);


  const strim = (s: string)=>{
    if(s.length > 20){
        let tString = s.substr(0, 20);
        s = tString.substr(0, Math.min(tString.length, tString.lastIndexOf(" ")))+'...';
    }
    return s;
  }

  const renderProducts = () =>{
      let prods;
      prods = products.map((p)=>{
        let prod: any = p;
            return (<div className="products-card" key={prod.id}>
                <img src="https://dummyimage.com/600x400/f34033/f3f2f7" alt="Avatar" className={'products-card-img'} />
                <div className="products-card-container">
                <h4><b>{prod.title}</b></h4>   
                 <p>{strim(prod.description)}</p>
                  <p><Link className={'products-card-button'} to={['/product/',prod.id].join('')}>BUY NOW</Link></p>
                </div>
            </div>);
      });

      return prods;
  }

  return (
    <>
		<div className="container app-body">
      <div className={'products'}>
        {renderProducts()}
      </div>

		</div>
    </>
  );
}

