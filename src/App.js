import './App.css';
import { Route } from 'react-router';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import countriesDB from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <CountriesList countries={countriesDB} />
          </div>

          <div className="col">
            <Route
              path="/:id"
              render={(props) => (
                <CountryDetails {...props} countries={countriesDB} />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// <CountryDetails {...props} countries={countriesDB} /> --> Explanation of what it is by element ⬇️⬇️
// Function ----> Group of parameters ({...props}) // single parameters parameterName={dataWePass}

export default App;
