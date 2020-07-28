import React, { useEffect } from 'react'
import './ProgressChart.css'

export default function Chart(props) {
  const canvasColors = ['#8BC34A', '#f44336', '#9E9E9E']

  const { data, id, stroke = 10, width = 300, height = 150 } = props

  let propList = []
  let canvasPropList = []
  let i = 0, sum = 0
  for (let prop in data) {
    if (prop !== 'defaultProp') {
      propList
        .push((
          <li key={i}>
            <span className="bullet" style={{backgroundColor: canvasColors[i]}}></span>
            {prop}
            <span className="rightAligned">{data[prop]}%</span>
          </li>
        ))
      canvasPropList.push({color: canvasColors[i++], filler: data[prop] / 100})
      sum += data[prop]
    } else {
      const result = +(100 - sum).toFixed(2)
      propList
        .push((
          <li key={i}>
            <span className="bullet" style={{backgroundColor: canvasColors[i]}}></span>
            {data[prop]}
            <span className="rightAligned">{result}%</span>
          </li>
        ))
        canvasPropList.push({color: canvasColors[i++], filler: result / 100})
      }
  }

  useEffect(() => {
    const canvas = document.querySelector(`#${id}`)
    const c      = canvas.getContext('2d')

    canvas.width = width
    canvas.height = height
    const radius = Math.min(width, height) * 0.45
    c.lineWidth  = stroke

    let dr = - Math.PI / 2
    for (let prop of canvasPropList) {
      if (dr > Math.PI * 1.5) break
      c.beginPath()
      c.strokeStyle = prop.color
      c.arc(width / 2, height / 2, radius, dr, dr += Math.PI * 2 * prop.filler)
      c.stroke()
      c.closePath()
    }
  })

  return (
    <div className="chart-grid">
      <canvas
        id={id}
      ></canvas>
      <ul>
        {propList}
      </ul>
    </div>
  )
}