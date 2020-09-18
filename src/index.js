import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, { kegList: {
  "1": {
    id: "1",
    name: "Bottom Shelf Brew",
    brand: "OnTap",
    pints: 64,
    price: 3,
    alcoholContent: 4
  },
  "2": {
    id: "2",
    name: "Middle of the Line",
    brand: "OnTap",
    pints: 124,
    price: 4,
    alcoholContent: 5
  },
  "3":{
    id: "3",
    name: "Top Shelf Brew",
    brand: "OnTap",
    pints: 32,
    price: 5,
    alcoholContent: 6
  }
}})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);