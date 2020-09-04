import React, { useState, ChangeEvent, useEffect } from 'react';
import { Link } from "react-router-dom";

interface AppProps{
    products: string[],
    addCart: (e: string[]) => void,
    changeHeader: (e: string) => void
}
export const Home: React.FC<AppProps> = (props) => {
  
  const products = props.products || [];

  useEffect(()=>{
    props.changeHeader('')
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
      let prod: any = products || null; 
      if(prod.books){
        prods = Object.keys(prod.books).map((key)=>{
          return (<div className="products-card" key={prod.books[key].id}>
              <img src={prod.books[key].img} alt="Avatar" className={'products-card-img'} />
              <div className="products-card-container">
              <h4><b>{prod.books[key].title}</b></h4>   
                <p>{strim(prod.books[key].description)}</p>
                <p><Link className={'products-card-button'} to={['/product/',prod.books[key].id].join('')}>BUY NOW</Link></p>
              </div>
          </div>);
        });
      }
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

