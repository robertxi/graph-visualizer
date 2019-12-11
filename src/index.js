import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GraphComponent from './GraphComponent';


const settings = {
  edges: [
    {
      id: 1, 
      child: 2, 
      parent: 1
    },
    {
      id: 2, 
      child: 3, 
      parent: 1
    },
    {
      id: 3, 
      child: 7, 
      parent: 1
    },
    {
      id: 4, 
      child: 4, 
      parent: 3
    },
    {
      id: 5, 
      child: 5, 
      parent: 3
    },
    {
      id: 6, 
      child: 2, 
      parent: 4
    },
    {
      id: 7, 
      child: 6, 
      parent: 4
    },
    {
      id: 8,
      child: 8,
      parent: 7
    }
  ], 
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
      children: [8],
    },
    {
      id: 8,
      name: "eight",
      value: "eight",
      parents: [7],
      children: [],
    }
  ]
}

ReactDOM.render(<GraphComponent nodes={settings.nodes} edges={settings.edges}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
