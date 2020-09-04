import React, { useState, ChangeEvent, useEffect } from 'react';
import {fetchProductDetails} from '../utilities/api';
import { Link } from "react-router-dom";

interface AppProps {
    products: string[],
    cart: string[],
    addCart: (e: string[]) => void
}
export const Product: React.FC<AppProps> = (props) => {
   let propsData: any = props;

  const [cart,setProdToCart] = useState(props.cart || []);
  const [product, setProduct] = useState({
        author: "",
        description: "",
        id: "",
        img: "",
        isbn: "",
        pageCount: "",
        title: ""
  });
  useEffect(()=>{
    /** fetch product details */
    fetchProductDetails(propsData.match.params.id).then((r)=>{
        const response = r.parsedBody;
        setProduct({
            ...product,
            ...response
        });
    });

  },[]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>{
    //setProd(e.currentTarget.value);
  }

  const addToCart = (e: any) =>{
    props.addCart(e.currentTarget.id);
  }



console.log(product,"s")
  return (
    <>
		<div className="container app-body">
                <div className={'product-container'}>
                    <div className={'product-grid'}>
                        <div className={'col-4 product-container-img'}>
                            <img src="https://dummyimage.com/600x400/f34033/f3f2f7" />
                        </div>
                        <div className={'col-8 product-container-details'}>
                            <h2>{product.title}</h2>
                            <div className={'label'}>Author: {product.author}</div>
                            <div className={'label'}>Page Count: {product.pageCount}</div>
                            <div className={'label'}>ISBN: {product.isbn}</div>
                            <button className={'product-container-details-cart-btn'} id={product.id} onClick={addToCart}>Add to Cart</button>
                            <Link className={'product-container-details-buy-btn'} id={product.id} to={'/myorders'}>Buy Now</Link>
                            <p>{product.description}</p>
                        </div>
                    </div>    
                </div>
		</div>
    </>
  );
}

