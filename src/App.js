import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Hero from './Hero';
import Nav from './nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
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
