import orderService from './orderService';
import React, {useState} from 'react';
import NodeRowComponent from './NodeRowComponent';
import EdgeComponent from './EdgeComponent'
import useWindowResize from './resizeHook'

const DrawEdges = ({edges}) => {
  useWindowResize()
  const nodeDiv = document.getElementById("nodeWindow").getBoundingClientRect()
  const viewBox = `${nodeDiv.x} ${nodeDiv.y} ${nodeDiv.width} ${nodeDiv.height}`

  const svgPosition = {
    position: "absolute",
    top: 8 ,
    left: 8,
    width: nodeDiv.width,
    height: nodeDiv.height,
    overflow: 'visible'
  }
  return (
    <svg viewBox={viewBox} style={svgPosition}>
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

  let windowWidth = 0;
  for(let arr of orderedNodes){
    windowWidth = arr.length > windowWidth ? arr.length : windowWidth;
  }
  const nodeWindowStyle = {
    'min-width': windowWidth * 200
  }
  return (
    <>
    <div style={nodeWindowStyle} id="nodeWindow">
      {orderedNodes.map((nodeArr, index) => <NodeRowComponent nodes={nodeArr}></NodeRowComponent>)}
    </div>
    {lastNodeDrawn? <DrawEdges edges={edges} /> : <></>}
    </>
  )
}
export default GraphComponent