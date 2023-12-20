import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import RouterMenu from './Router/Router.jsx';
import { Provider } from 'react-redux';
import { store, persistManager } from '../Redux/actions/Store/index.js';
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistManager}>
  <BrowserRouter>
    <RouterMenu />
  </BrowserRouter>
  </PersistGate>
  </Provider>
)
