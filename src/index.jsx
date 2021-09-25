import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/stores';

import Dashboard from './pages/Dashboard/Dashboard';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';

import preloadedState from './mock/preloadedState.mock';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore(preloadedState)}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/details/:source/:character" component={CharacterDetails} />
          <Redirect path="dashboard" to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
