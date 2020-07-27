import React from 'react'
import './ProgressChart.css'

export default function Chart(props) {
  const { data, id } = props

  let propList = []
  let i = 0, sum = 0
  for (let prop in data) {
    if (prop !== 'defaultProp') {
      propList
        .push((
          <li key={++i}>
            {prop} <span className="rightAligned">{data[prop]}%</span>
          </li>
        ))
      sum += data[prop]
    } else {
      propList
        .push((
          <li key={++i}>
            {data[prop]} <span className="rightAligned">{100 - sum}%</span>
          </li>
        ))
    }
  }

  const renderChart = () => {
  }

  return (
    <div className="chart-grid">
      <canvas
        onLoad={renderChart()}
        id={id}
      ></canvas>
      <ul>
        {propList}
      </ul>
    </div>
  )
}