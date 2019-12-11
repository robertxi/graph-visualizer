import React from 'react'
import NodeComponent from './NodeComponent';

const NodeRow = ({nodes}) => {

  return (
    <div className="node-row">
    {
      nodes.map((node)=>{
        return <NodeComponent key={node.id} node={node}/>
      })
    }
    </div>
  )
}

export default NodeRow