import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
// import Assignment1 from './components/Assignment1/Assignment1';
// import Assignment2 from './components/Assignment2/Assignment2';

ReactDOM.render(
  <React.StrictMode>
    {<App title='First React App - Person Management'/>}
	{/*<Assignment1 />*/}
	{/*<Assignment2 />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();