import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from './store/index';
ReactDOM.render(
    <Provider store={store} >
    <App/> 
</Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

serviceWorker.unregister();
