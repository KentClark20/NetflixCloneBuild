import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests.js';
import { request } from 'http';
import Banner from './Banner';
import Nav from './Nav';

function App(){
    return (
        <div className="app">
            <Nav />
            <Banner />
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetlfixOriginals}
                isLargeRow={true}
              />
            <Row title= "Trending Now" fetchUrl={request.fetchTrending} isLargeRow={true} />
            <Row title= "Top Rated" fetchUrl={request.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchTrending} />

        </div>
    );
}

export default App;