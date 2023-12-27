import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.min.css';
import './assets/vendor/animate.css/animate.min.css';
import './assets/css/style.css'
import './assets/vendor/swiper/swiper-bundle.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// npm i redux@4.2.1 react-redux@8.1.3 redux-thunk@2.4.2
// npm i  redux-logger
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk'

import rootStore from './stores/'
const store = createStore(rootStore, applyMiddleware(reduxThunk));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
