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
      children: [2,3,7],
      isRoot: true
    },
    {
      id: 2,
      name: "two",
      value: "two",
      parents: [1, 4],
      children: [],
    },
    {
      id: 3,
      name: "three",
      value: "three",
      parents: [1],
      children: [4,5],
    },
    {
      id: 4,
      name: "four",
      value: "four",
      parents: [3],
      children: [2,6],
    },
    {
      id: 5,
      name: "five",
      value: "five",
      parents: [3],
      children: [],
    },
    {
      id: 6,
      name: "six",
      value: "six",
      parents: [4],
      children: [],
    },
    {
      id: 7,
      name: "seven",
      value: "seven",
      parents: [1],
      children: [],
    }
  ]
}

ReactDOM.render(<GraphComponent nodes={settings.nodes}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
