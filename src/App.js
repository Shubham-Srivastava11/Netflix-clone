import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Row from './Components/Row/Row';
import requests from './requests';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>

      <Banner/>

      {requests.map((genre) =>(
        <Row
          key={genre.title}
          title={genre.title}
          fetchUrl={genre.url} 
          isLargeRow ={genre.isLarge}
      />
      ))}

    </div>
  );
}

export default App;
