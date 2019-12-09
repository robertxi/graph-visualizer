import React from 'react'

const NodeRow = ({nodes}) => {

  return (
    <div>
    {
      nodes.map((node)=>{
        return <span key={node.id}>{node.value}</span>
      })
    }
    </div>
  )
}

export default NodeRow