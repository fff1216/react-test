import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pig from "./pages/sc";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Pig />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
