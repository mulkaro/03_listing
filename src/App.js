import './App.css';
import JsonFile from './components/etsy.json';
import shortid from 'shortid';

function Good({item}) {
 
  var curImage = "";
  try {
    curImage = item.MainImage["url_570xN"]
  } catch (e) {
    return null};

  let curPrice = Show_attrib('PRICE',item.currency_code, item.price);
  let curTitle = Show_attrib('TITLE',item.title, '');
  let curLeftClass = Show_attrib('LEFT',item.quantity,'');

  return(
    <div className="item" key={shortid.generate()}>
      <div className="item-image">
        <a href={item.url}>
          <img src={curImage} alt=""/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{curTitle}</p>
        <p className="item-price">{curPrice}</p>
        <p className={curLeftClass}>{item.quantity} left</p>
      </div>
    </div>      
  )

  function Show_attrib(partype,str1, str2) {
    let result='';
    if (partype==='TITLE') {
      try {
        if (str1.length>50) {
          result = str1.substring(0,50)+'...';
        }
        else 
        {
          result = str1;
        }
      } catch {
        result=null
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
      result = ((str1<=10) && "item-quantity level-low") || ((str1<=20) && "item-quantity level-medium") || "item-quantity level-high";
      }
    
    
    return (result)
  }
}

function App() {

  return(<>{JsonFile.map((card,index) => <Good item={card} key={index} />)}</>)
}

export default App
