import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

interface AppProps{

}
export const Header: React.FC<AppProps> = (props) => {
  const mypath = window.location.pathname.split("/");

  const [state,setState] = useState({
    home:true,
    myorders:false,
    cart:false
  });

  useEffect(()=>{
    onNavChange({currentTarget:{id:(mypath[1])?mypath[1]:'home'}});
  },[]);
  
  const onNavChange = (e:any) =>{
    let newstate:any = {};
    Object.keys(state).forEach((s) => {
      newstate[s] = (s===e.currentTarget.id)?true:false
    });

    setState(newstate);
  }

  return (
    <>
		<header className="app-header">
      <span className="app-header-nav logo">eCommerce Site</span>
      <div className="app-header-right">
        <Link className={["app-header-nav",(state.home)?'active':''].join(" ")} to="/" onClick={onNavChange} id="home">Home</Link>
        <Link className={["app-header-nav",(state.myorders)?'active':''].join(" ")} to="/myorders" onClick={onNavChange} id="myorders">My Orders</Link>
        <Link className={["app-header-nav",(state.cart)?'active':''].join(" ")} to="/cart" onClick={onNavChange} id="cart">Cart</Link>
      </div>
		</header>
    </>
  );
}

