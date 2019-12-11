import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import GraphComponent from './GraphComponent';

const generateNode = (id, value, parents, children, isRoot = false) => {
  return {
    id: id,
    name: value,
    value: value,
    parents: parents,
    children: children,
    isRoot: isRoot
  }
}

const generateEdge = (id, child, parent) => {
  return {
    id: id, 
    child: child, 
    parent: parent
  }
}

//limitDistance = true links each node to a relatively close parent. results in deep, but narrow graphs
//limitDistance = false randomly allows parent choice, usually results in wide but shallow graphs
//toggle this in "generateGraph" function
const generateParents = (maximum, limitDistance = false) => {
  const limiter = maximum > 5 ? maximum - 5 : 0
  return [Math.floor(limitDistance? Math.random() * (maximum - limiter) + limiter : Math.random() * maximum)]
}

const generateChildren = (current, maximum) => {
  return [Math.ceil(Math.random() * (maximum-current)) + current]
}

const buildEdgeAndLinkNodes = (node, nodeMap, edgesArr) => {
  const parents = node.parents
  const children = node.children
  for(let parent of parents){
    if(!edgesArr.find((edge) => edge.id === `${node.id}${parent}`)){
      const newEdge = generateEdge(`${node.id}${parent}`, node.id, parent)
      linkNodes(newEdge, nodeMap)
      edgesArr.push(newEdge)
    }
  }
  for(let child of children){
    if(!edgesArr.find((edge) => edge.id === `${child}${node.id}`)){
      const newEdge = generateEdge(`${child}${node.id}`, child, node.id)
      linkNodes(newEdge, nodeMap)
      edgesArr.push(newEdge)
    }
  }
}

const linkNodes = (edge, nodeMap) => {
  const childNode = nodeMap[edge.child]
  const parentNode = nodeMap[edge.parent]
  !childNode.parents.includes(edge.parent) ? childNode.parents.push(edge.parent) : void 0;
  !parentNode.children.includes(edge.child) ? parentNode.children.push(edge.child) : void 0;
}

const generateGraph = (nodeCount, extraEdges) => {
  const nodesArr = [];
  const edgesArr = [];
  const nodeMap = {}
  const root = generateNode(0, 0, [], [], true)
  nodesArr.push(root)
  nodeMap[root.id] = root
  for(let i = 1; i <= nodeCount; i++) {
    const newNode = generateNode(i, i, generateParents(i, true), [])
    if(i === nodeCount) newNode.children = []
    nodesArr.push(newNode)
    nodeMap[newNode.id] = newNode
  }
  for(let node of nodesArr) {
    buildEdgeAndLinkNodes(node, nodeMap, edgesArr)
  }
  for(let i = 0; i < extraEdges; i++) {
    const parent = generateParents(nodeCount-1)[0]
    const child = generateChildren(parent, nodeCount)[0]
    if(!edgesArr.find((edge) => edge.id === `${child}${parent}`)){
      const newEdge = generateEdge(`${child}${parent}`, child, parent)
      linkNodes(newEdge, nodeMap)
      edgesArr.push(newEdge)
    }
  }
  return [nodesArr, edgesArr]
}

const [nodes, edges] = generateGraph(500)
ReactDOM.render(<GraphComponent nodes={nodes} edges={edges}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
