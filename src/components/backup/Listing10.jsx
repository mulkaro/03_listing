import React from 'react';
import './main.css';
//import JsonData from './etsy.json';

const showAttrib = (partype,str1, str2) => {
  let result='';
  if (partype==='TITLE') {
    if (str1.length>50) {
      result = str1.substring(0,50)+'...';
    }
    else 
    {
      result = str1;
    }
  };

  if (partype==='PRICE') {
    switch (str1) {
      case 'USD':
        result = '$' + str2;
        break;
      case 'EUR':
        result = 'Ꞓ' + str2;
        break;
      default:
        result = str2 + ' ' + str1;
    }
  }

  if (partype==='LEFT') {
    switch (str1) {
      case Number(str1)<=10:
        result = 'item-quantity level-low';
        break;
      case Number(str1)<=20:
        result = 'item-quantity level-medium';
        break;
      default:
        result = 'item-quantity level-high';
    }
  } 
  
  return (result)
}

function GetImage ({url,source}) {

  return (
    <div class="item-image">
      <a href={url}>
        <img src={source} alt="" />
      </a>
    </div>  
  )

}

function GetDetails ({title,curcode,price,quantity}) {
  let curtitle=showAttrib("TITLE",title,"");
  let curprice=showAttrib("PRICE",curcode,price);
  return(
    <div className="item-details">
      <p className="item-title">{curtitle}</p>
      <p className="item-price">{curprice}</p>
      <p className={showAttrib("LEFT",{quantity},"")}>{quantity} left</p>
    </div>
  )
}

function Listing ({jsonData}) {
  return (jsonData.map(
    (info) => {
      return (
        <div className="item-list">

          <GetDetails title={info.title} curcode={info.currency_code} price={info.price} quantity={info.quantity} />
        </div>
      )
    }
  )
  )
     
}

export default Listing;
