import orderService from './orderService';
import React from 'react';
import NodeRow from './NodeRow';

const GraphComponent = ({nodes, edges}) => {
  const orderedNodes = orderService.orderNodes(nodes);
  console.log(orderedNodes)
  return (
    <div>
      {orderedNodes.map((nodeArr) => <NodeRow nodes={nodeArr}></NodeRow>)}
      
    </div>
  )
}
export default GraphComponent