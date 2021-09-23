import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/stores';

import Dashboard from './pages/Dashboard/Dashboard';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';

import preloadedState from './mock/preloadedState.mock';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore(preloadedState)}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/details/:character" component={CharacterDetails} />
          <Redirect path="dashboard" to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
