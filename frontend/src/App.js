import './App.css';
import React ,{useEffect, useState} from 'react';
import Submit from './components/Submit/Submit';
import Linechart from './components/Graph/Line';
import Barchart from './components/Graph/Bar';
import Menu from './components/Dropdown/Dropdown';

function App() {

  const [response,setResponse] = useState([]);
  const [response2,setResponse2] = useState([]);
  const [endpoint,setEndpoint] = useState('/price/MSFT');
  const [ticker,setTicker] = useState('MSFT')
  const [finance,setFinance] = useState('/financials/MSFT')
  const [timeRange,setTimerange] = useState('1')


  useEffect ( () => {
    fetch(endpoint).then(response => 
      response.json().then(data => {
        setResponse(data.Data);
      }))
  },[endpoint]);

  useEffect ( () => {
    fetch(finance).then(response => 
      response.json().then(data => {
        setResponse2(data.Data);
      }))
  },[finance]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ticker);
    setTicker(e.target[0].value);
    setEndpoint('/price/'+ticker);
    setFinance('/financials/'+ticker);
  };

  const handleDropdown = (e) => {
    e.preventDefault();
    setTimerange('/'+e.target.id);
    setEndpoint('/price/'+ticker+timeRange);
  };


  return (
    <div className="App">
      <div>{ticker}</div>
      <div className="menu">
        <Submit onSubmit={handleSubmit}/>
        <Menu onClick={handleDropdown}/>
      </div>
      <div className='graphs'>
        <Linechart data={response} x_key="Date" y_key='Close ($)'/>
        <Barchart data={response} x_key='Date' y_key ='Volume (billion $)'/>
        <Linechart data={response2} x_key='Period' y_key='Earnings ($)'/>
        <Barchart data={response2} x_key='Period' y_key='Revenue (billion $)'/>
    </div>
    </div>
  );
}

export default App;
