import React from 'react'

const NodeComponent = ({node}) => {
  if(node.renderEdgeCallback){
    setTimeout(node.renderEdgeCallback(true), 0)
  }
  return (
    <div id={node.id}className="node-component">{node.value}</div>
  )
}

export default NodeComponent;