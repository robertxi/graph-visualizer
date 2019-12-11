import orderService from './orderService';
import React, {useState} from 'react';
import NodeRowComponent from './NodeRowComponent';
import EdgeComponent from './EdgeComponent'
import useWindowResize from './resizeHook'

const DrawEdges = ({edges}) => {
  const [x, y] = useWindowResize()
  const nodeDiv = document.getElementById("nodeWindow").getBoundingClientRect()
  const svgPosition = {
    position: "absolute",
    top: nodeDiv.x - 8,
    left: nodeDiv.y - 8,
    width: nodeDiv.width,
    height: nodeDiv.height
  }
  return (
    <svg style={svgPosition}>
        {edges.map((edge) => <EdgeComponent edge={edge}/>)}
      </svg>
  )
}

const GraphComponent = ({nodes, edges}) => {
  const [lastNodeDrawn, useLastNodeDrawn] = useState(false)
  const [orderedNodes] = orderService.orderNodes(nodes);
  const lastArr = orderedNodes[orderedNodes.length-1]  
  const lastNode = lastArr[lastArr.length-1]
  lastNode.renderEdgeCallback = useLastNodeDrawn;

  return (
    <>
    <div id="nodeWindow">
      {orderedNodes.map((nodeArr, index) => <NodeRowComponent nodes={nodeArr}></NodeRowComponent>)}
    </div>
    {lastNodeDrawn? <DrawEdges edges={edges} /> : <></>}
    </>
  )
}
export default GraphComponent