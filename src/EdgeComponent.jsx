import React from 'react'

const getElement = (id) => {
  return document.getElementById(id)
}
const getCenter = (element) => {
  const rect = element.getBoundingClientRect()
  return [(rect.left + rect.right)/2, (rect.top + rect.bottom)/2]
}
const EdgeComponent = ({edge}) => {
  let [cx, cy] = getCenter(getElement(edge.child))
  let [px, py] = getCenter(getElement(edge.parent))
  //line offset to end on edges of nodes
  cy -=26
  py +=26

  // mid-point of line:
  // let mpx = (px + cx) * 0.5;
  let mpy = (py + cy) * 0.5;

  // location of control points: bezier
  const ct1x = cx
  const ct1y = mpy
  const ct2x = px
  const ct2y = mpy

  // construct the command to draw a curveto bezier curve
  const curve = `M${cx} ${cy} C ${ct1x} ${ct1y} ${ct2x} ${ct2y} ${px} ${py}`

  return (
    <path d={curve}stroke="black" strokeWidth="4" strokeLinecap="round" fill="transparent" />
  )
}

export default EdgeComponent