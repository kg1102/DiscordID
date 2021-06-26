import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Input from './components/Input';
import DiscordDetails from "./components/DiscordDetails";


function App() {
  return (
    <Router>
      <>
        <Route
          path="/"
          exact
          render={()=>(
            <div className="search-container">
              <Input/>
            </div>  
          )}
        />
        <Route path="/user/:DiscordID" exact component={DiscordDetails}/>
      </>
    </Router>
  );
}

export default App;
