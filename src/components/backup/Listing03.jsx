import React from 'react';
import './main.css';
//import shortid from 'shortid';

function Listing (jsonData) {
  function Show_attrib(partype,str1, str2) {
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

  function Good(item, index) {

    return(
      <div className="item" key={index}>
        <div className="item-image">
          <a href="{item.url}">
            <img src="{item.MainImage}" alt=""/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{Show_attrib('TITLE','{item.title}', '')}</p>
          <p className="item-price">{Show_attrib('PRICE','{item.currency_code}', '{item.price}')}</p>
          <p className={Show_attrib('LEFT','{item.quantity}', '')}>${item.quantity} left</p>
        </div>
    </div>
    )
  }

  const jsonForm = JSON.parse(jsonData);

  return (
    <div class="item-list">
      {jsonForm.map((card) => <Good item={card} index={card.listing_id} />)}
    </div>
  )  
    
}

export default Listing;
