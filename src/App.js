import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>This is a clone for Netflix's landing page!</h1>
      <Row title="Netflix Originals" url={requests.netflix}/>
      <Row title="Trending now" url={requests.trending}/>
    </div>
  );
}

export default App;
