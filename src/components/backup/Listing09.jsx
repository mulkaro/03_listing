import React from 'react';
import './main.css';
//import shortid from 'shortid';

function Listing ({jsonData}) {
  function ShowAttrib(partype,str1, str2) {
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

    const elem = {
      id: item.listing_id,
      url: item.url,
      src: item.MainImage.url_570xN,
      title: <ShowAttrib partype="TITLE" str1={item.title} />,
      curcode: this.ShowAttrib('PRICE',item.currency_code, item.price),
      leftclass: this.ShowAttrib('LEFT',item.quantity),
      leftcount: item.quantity
    }


    return(
      <div className="item" key={elem.id}>
        <div className="item-image">
          <a href={elem.url}>
            <img src={elem.url} alt=""/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{elem.title}</p>
          <p className="item-price">{elem.curcode}</p>
          <p className={elem.leftclass}>{elem.leftcount} left</p>
        </div>
      </div>
    )
  }

  var goodsList=[];
  for (var i = 0; i < jsonData.length; i++)
  {
    var obj = jsonData[i];
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
