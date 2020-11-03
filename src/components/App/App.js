import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
//import Preloader from "../Preloader/Preloader";
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/saved-news">
          <SavedNews />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
