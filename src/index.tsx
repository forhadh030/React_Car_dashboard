import React, { Suspense } from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, Dashboard, SignIn } from './components';
import './style.css';
import {firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store';

let myTitle = "Syed's AutoShop"

const root = document.getElementById('root');
render(
  <React.StrictMode>
    <React.Suspense fallback={<>...</>}>
  <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
  <Provider store={store}>

    <Router>
      <Switch>

        <Route exact path="/">
          <Home title = {myTitle}/>
        </Route>

        <Route exact path='/Dashboard'>
          <Dashboard></Dashboard>
        </Route>
        
        {<Route exact path='/SignIn'>
          {<SignIn></SignIn>}
        </Route>}
      
      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
    </React.Suspense>
  </React.StrictMode>,
  root
);