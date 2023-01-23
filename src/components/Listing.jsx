import React from 'react';
import './main.css';
//import JsonData from './etsy.json';

function Listing (jsonData) {
  function Show_attrib(partype,str1, str2) {
    let result='';
    if (partype==='TITLE') {
      if (str1.length>50) {
        result = str1.substring(1,50)+'...';
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
          result = 'low';
          break;
        case Number(str1)<=20:
          result = 'medium';
          break;
        default:
          result = 'high';
      }
    } 
    
    return (result)
  }

   return (jsonData.map(
    (info, index) => {
      <div class="item-list">
        <div class="item">
          <div class="item-image">
            <a href="{info.url}">
              <img src="{info.MainImage}" alt=""/>
            </a>
          </div>
          <div class="item-details">
            <p class="item-title">{Show_attrib('TITLE','{info.title}', '')}</p>
            <p class="item-price">{Show_attrib('PRICE','{info.currency_code}', '{info.price}')}</p>
            <p class="item-quantity level-${Show_attrib('LEFT','{info.quantity}', '')}">${info.quantity} left</p>
          </div>
        </div>
      </div>
    }
  )
  )
     
}

export default Listing;
