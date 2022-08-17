import './App.css';
import React ,{useEffect, useState, useRef} from 'react';
import Submit from './components/Submit/Submit';
import Linechart from './components/Graph/Line';
import Barchart from './components/Graph/Bar';
import Menu from './components/Dropdown/Dropdown';

function App() {

  const ticker = useRef('MSFT');
  const timeRange = useRef('/1');
  const [endpoint,setEndpoint] = useState('/price/'+ticker.current);
  const [finance,setFinance] = useState('/financials/MSFT');
  const [priceData,setPriceData] = useState([]);
  const [financialData,setFinancialData] = useState([]);


  useEffect ( () => {
    fetch(endpoint).then(response => 
      response.json().then(data => {
        setPriceData(data.Data);
      }))
  },[endpoint]);

  useEffect ( () => {
    fetch(finance).then(response => 
      response.json().then(data => {
        setFinancialData(data.Data);
      }))
  },[finance]);


  const handleSubmit = (e) => {
    e.preventDefault();
    ticker.current = e.target[0].value;
    setEndpoint('/price/'+ticker.current);
    setFinance('/financials/'+ticker.current);
  };

  const handleDropdown = (e) => {
    timeRange.current = ('/'+e.target.id);
    setEndpoint('/price/'+ticker.current+timeRange.current);
  };


  return (
    <div className="App">
      <div className="title">{ticker.current}</div>
      <div className="menu">
        <Submit onSubmit={handleSubmit}/>
        <Menu onClick={handleDropdown}/>
      </div>
      <div className='graphs'>
        <Linechart data={priceData} x_key="Date" y_key='Close ($)'/>
        <Barchart data={priceData} x_key='Date' y_key ='Volume (billion $)'/>
        <Linechart data={financialData} x_key='Period' y_key='Earnings ($)'/>
        <Barchart data={financialData} x_key='Period' y_key='Revenue (billion $)'/>
    </div>
    </div>
  );
}

export default App;
