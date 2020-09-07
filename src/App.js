import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <Hero />
      <h1>This is a clone for Netflix's landing page!</h1>
      <Row title="Netflix Originals" url={requests.netflix} large/>
      <Row title="Trending" url={requests.trending}/>
      <Row title="Top Rated" url={requests.topRated}/>
      <Row title="Action Movies" url={requests.action}/>
      <Row title="Romance" url={requests.romance}/>
      <Row title="Horror" url={requests.horror}/>
      <Row title="Documentaries" url={requests.documentaries}/>
    </div>
  );
}

export default App;
