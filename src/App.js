import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>This is a clone for Netflix's landing page!</h1>
      <Row title="Netflix Originals" url={requests.netflix}/>
      <Row title="Trending" url={requests.trending}/>
      <Row title="Top Rated" url={requests.topRated}/>
      <Row title="Action Movies" url={requests.action}/>
      <Row title="Rmance" url={requests.romance}/>
      <Row title="Horror" url={requests.horror}/>
      <Row title="Documentaries" url={requests.documentaries}/>
    </div>
  );
}

export default App;
