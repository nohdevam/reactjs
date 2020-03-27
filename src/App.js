import React, { useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Content from './component/content/content';
import LoginForm from './component/LoginForm/LoginForm';
import ColorGenerator from './component/ColorGenerator/ColorGenerator';
import Compteur from './component/Compteur/Compteur';
import { data } from './assets/mockData';

import Englobant from './HOC/Englobant';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Card from './component/card/card';
function App() {
   
    return (
      <Router>
          <Englobant className="App">
              <Header/>
              {/* Le switch ne rendra qu'un seul élément */}
              <Switch>
                <Route path="/" exact /> 
                  <Route path="/login">
                      <LoginForm />
                  </Route>
                  <Route path="/colors">
                      <ColorGenerator />
                  </Route>
                  <Route path="/compteur">
                      <Compteur />
                  </Route>
                  <Route path="/contenu">
                      <Content data={data} />
                  </Route>
                  <Route path="/contenu/:idCard">
                    <Content data={data} />
                  </Route>
              </Switch>
          </Englobant>
      </Router>
  );
}

export default App