import React from 'react'
import data from '../data.json'

import Panel from './Panel/Panel' 

export default function App() {

  return (
    <div className="container">
      <Panel data={data} />
    </div>
  )
}