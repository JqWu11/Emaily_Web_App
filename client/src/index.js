import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';

// 1) Import ReactDOM library
import ReactDOM from "react-dom/client";
 
// 2) Import App component as usual
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));
 
// 3) Get a reference to the div with ID root
const el = document.getElementById("root");
 
// 4) Tell React to take control of that element
const root = ReactDOM.createRoot(el);
 
// 5) Show the component on the screen
root.render(
<Provider store= {store}><App /></Provider>,
    document.querySelector('#root'));