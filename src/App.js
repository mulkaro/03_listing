//import logo from './logo.svg';
import './App.css';
import Listing from './components/Listing';
import JsonData from './components/etsy.json';

function App() {
  return (
    <div className='App'>
      <Listing jsonData={JSON.stringify({JsonData})}/>
    </div>
  );
}

export default App;
