import React from 'react';
import './Main.css';
import Sdata from './Sdata.jsx';
import Card from './Card';

function ncard(val){
  
    return(
      <Card  sname={val.sname}
      price={val.price}
      pack={val.pack}
      btnname={val.btnname}
    />
    );
}

const Main = () => {
    return (
        <div>
            <div className="container">
                <span><h1>Subscription</h1></span>
                <span><h3>Take your desired plans to get  access to our content easily. we like to offer special license offer to our users.</h3></span>
                <div className="plans-card">
                {Sdata.map(ncard)}
                </div>
            
            </div>
        </div>
    )
}

export default Main;
