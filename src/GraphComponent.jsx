import orderService from './orderService';
import React from 'react';

const GraphComponent = ({nodes, edges}) => {
  const orderedNodes = orderService.orderNodes(nodes);

  return (
    <div>
      {orderedNodes.map((node) => <span>node.value</span>)}
    </div>
  )
}
export default GraphComponent