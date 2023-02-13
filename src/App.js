//import logo from './logo.svg';
import './App.css';
import Listing from './components/Listing';
import JsonFile from './components/etsy.json';

function App() {

  //let jsonData = JSON.stringify(JsonFile);
  //let jsonData = JsonFile;

  return (
    <div>
      <Listing jsonData={JsonFile} />
    </div>
  );

}

export default App;
