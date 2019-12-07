import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GraphComponent from './GraphComponent';


const settings = {
  nodes: [
    {
      id: 1,
      name: "one",
      value: "one",
      parents: [],
      children: [],
      isRoot: true
    }
  ]
}

ReactDOM.render(<GraphComponent nodes={settings.nodes}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
