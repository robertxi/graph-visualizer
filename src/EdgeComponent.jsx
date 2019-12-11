import React, {useState} from 'react'

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
  cy -=26
  py +=26

  // mid-point of line:
  let mpx = (px + cx) * 0.5;
  let mpy = (py + cy) * 0.5;

  // angle of perpendicular to line:
  let theta = Math.atan2(py - cy, px - cx) - Math.PI / 2;

  let offset = cx <= px ? cx == px? 0 : 20 : -20;

  // location of control point:
  var ct1x = mpx + offset * Math.cos(theta);
  var ct1y = mpy + offset * Math.sin(theta);

  // construct the command to draw a quadratic curve
  var curve = "M" + cx + " " + cy + " Q " + ct1x + " " + ct1y + " " + px + " " + py;

  const lineStyle = {
    stroke:"black",
    strokeWidth:2
  }
  return (
    <path d={curve}stroke="black" strokeWidth="4" strokeLinecap="round" fill="transparent" />
    // <line x1={cx} y1={cy} x2={px} y2={py} style={lineStyle}/>
  )
}

export default EdgeComponent