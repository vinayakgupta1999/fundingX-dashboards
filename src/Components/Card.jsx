import React from 'react';
import './cards.css';


function Card(props){
    return(
      <div className="mycard">
        <div className="cards">
            <div className="card">
                <h3 className="card_title"> {props.sname} </h3>
                <div className="pack-price">
                    <h3 className="price" >{props.price} </h3>
                    <h4 className="pack"> {props.pack} </h4>
                </div>
                <div className="mybtn">
                    <button className="btn"> {props.btnname} </button>
                </div>
            </div>
        </div>
   </div> 
    );
  }
export default Card;

