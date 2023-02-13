import React, { useInsertionEffect } from 'react';
import './main.css';
//import JsonData from './etsy.json';

let arr=[];

const showName = (name) => {
  let result="";
  if (name.length>50) {
      result = name.substring(0,50)+'...';
    }
    else 
    {
      result = name;
    };

  return (<p className="item-title">{result}</p>)
  };

const showPrice = ({curcode, price}) => {
  let result = "";
  switch (curcode) {
    case 'USD':
      result = '$' + price;
      break;
    case 'EUR':
      result = 'Ꞓ' + price;
      break;
    default:
      result = price + ' ' + curcode;
  };

  return(<p className="item-price">{result}</p>)
};

const showLeft = ({left}) => {
  let result=0;
  switch (left) {
    case left<=10:
      result = 'item-quantity level-low';
      break;
    case left<=20:
      result = 'item-quantity level-medium';
      break;
    default:
      result = 'item-quantity level-high';
  }

  return(<p className={result}>{left} left</p>)
};

function GetImage ({url,source}) {

  return (
    <div className="item-image">
      <a href={url}>
        <img src={source} alt="" />
      </a>
    </div>  
  )

};

function GetDetails ({title,curcode,price,quantity}) {
  return(
    <div className="item-details">
      {showName(title)}
      {showPrice(curcode,price)}
      {showLeft(quantity)}
    </div>
  )
};

function Listing ({jsonData}) {
  return (jsonData.map(
    (info) => {
      return (
        <div className="item-list" key={info.listing_id}>
          <GetImage url={info.url} source={info.MainImage[0].url_570xN} />
          <GetDetails title={info.title} curcode={info.currency_code} price={info.price} quantity={info.quantity} />
        </div>
      )
    }
  )
  )
     
}

export default Listing;
