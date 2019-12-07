const orderService = {};

/**
 * A function that takes an array of nodes and returns a 2D array of nodes, ordered by relative position
 * requires one root node
 * nodes: 1D array of node objects
 * node type: Obj
 * node obj structure: 
 * {
 *  id: String 
 *  name: String
 *  value: String
 *  isRoot: Boolean
 *  parents: Array[Obj]
 *  children: Array[Obj]
 * }
 */
orderService.orderNodes = (nodes)=> {
  if(!nodes) return;
  let root;
  nodes.forEach((node) => {
    if(node.isRoot) root = node
  })
  if(!root) return;
  const orderedNodes = bfsAndOrder(root);
  return orderedNodes
}

const bfsAndOrder = (root) => {
  root.index = 0
  const orderedNodes = [[root]]
  const bfsQueue = []
  root.children.forEach((node) => bfsQueue.push(node))

  while(bfsQueue.length > 0) {
    let node = bfsQueue.shift()
    node.index = getInsertionIndex(node)
    insertNode(node, orderedNodes)
    moveChildrenBack(node, orderedNodes)
    node.children.forEach((c) => {bfsQueue.push(c)})
  }
  return orderedNodes;
}

const getInsertionIndex = (node) => {
  let largestIndex = 0;
  node.parents.forEach((n) => n.index && n.index > largestIndex ? largestIndex = n.index : void 0);
  return largestIndex + 1;
}

const moveChildrenBack = (node, orderedNodes) => {
  node.children.forEach((c) => {
    if(c.index && c.index < node.index){
      removeNode(c, orderedNodes)
      c.index = node.index + 1 //children go 1 index behind parent
      insertNode(c, orderedNodes)
    } 
  })
}

const insertNode = (node, orderedNodes)  => {
  if(!orderedNodes[node.index]) orderedNodes[node.index] = []
  if(orderedNodes[node.index].indexOf(node) === -1){
    orderedNodes[node.index].push(node)
  }
}

const removeNode = (node, orderedNodes) => {
  let arr = orderedNodes[node.index]
  let index = arr.indexOf(node)
  index >= 0 ? arr.splice(index,1) : void 0;
}

export default orderService;