import React from 'react';
import './main.css';
import shortid from 'shortid';

function Listing ({jsonData}) {
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

  function Good({item}) {

    return(
      <div className="item" key={shortid.generate()}>
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} alt=""/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{Show_attrib('TITLE',item.title, '')}</p>
          <p className="item-price">{Show_attrib('PRICE',item.currency_code, item.price)}</p>
          <p className={Show_attrib('LEFT',item.quantity,'')}>{item.quantity} left</p>
        </div>
    </div>
    )
  }

  //let jsonForm = JSON.parse(jsonData);
  //let jsonForm = jsonData;
  var goodsList=[];
  for (var i = 0; i < jsonData.length; i++)
  {
    var obj = jsonData[i];
    //console.log(JSON.stringify(obj));
    goodsList.push(<Good item={obj} />);
//    return(
//      <div>
//        <Good item={jsonData[i]} />
//      </div>  
//      )
  };

  return(goodsList)  

}

export default Listing;
