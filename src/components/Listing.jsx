//import { render } from '@testing-library/react';
import React from 'react';
import './main.css';
import shortid from 'shortid';

function Good({item}) {

  return(
    <div className="item" key={item.listing_id}>
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

function Listing ({jsonData}) {



  }

  /*for (var i = 0; i < jsonData.length; i++)
  {
    return(<Good item={jsonData[i]} key={shortid.generate()} />)
  };*/
  
  /*var arr=[];
  for (var i = 0; i < jsonData.length; i++)
  {
    arr.push(<Good item={jsonData[i]} key={shortid.generate()} />)
  };
  return(arr);*/

  /*for (let obj of jsonData)
  {
    return(<Good item={obj} />)
  };*/

  /*var arr=[];
  for (let obj of jsonData)
  {
    arr.push(obj)
  };
  
  return (<div>{arr.map(elem => <Good item={elem} />)}</div>)*/

  /*var arr=[];
  jsonData.forEach(element => {
    arr.push(<Good item={element} />);
  });
  return(<div>{arr}</div>);*/

//return(jsonData.map((card,index) => <Good item={card} key={index}/>))

/*return (
  <div>
    {jsonData.map((card) => (
      <Good item={card} />
    ))}
  </div>
);*/


}

//export default Listing;
