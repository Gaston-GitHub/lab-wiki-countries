
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countriesData from './countries.json'
import Routes from './Routes';

class App extends Component {

  state = {
    listCountries: countriesData
  }
      
      render() {
        const { listCountries } = this.state
        console.log(listCountries)
        return (
          <div className="App">
            <Navbar />
              <div className="container">
                <div className="row-app">
                  <CountriesList countries={listCountries} />
                  <Routes />
                </div>
              </div>
          </div>
        ) 

        
      }



}

export default App;
